import { createPostInput, updatePostInput } from "@gaurav12477/common";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { verify } from "hono/jwt";

export const blogRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
  Variables: {
    userId: string;
  };
}>();

blogRouter.use(async (c, next) => {
  const jwt = c.req.header("Authorization");
  if (!jwt) {
    c.status(401);
    return c.json({ error: "unauthorized" });
  }
  const token = jwt.split(" ")[1];
  const payload = await verify(token, c.env.JWT_SECRET);
  if (!payload) {
    c.status(401);
    return c.json({ error: "unauthorized" });
  }
  c.set("userId", payload.id);
  await next();
});

blogRouter.post("/", async (c) => {
  const userId = c.get("userId");
  const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();
  const { success } = createPostInput.safeParse(body);
  if (!success) {
    c.status(400);
    return c.json({ error: "invalid input" });
  }
  const post = await prisma.post.create({
    data: {
      title: body.title,
      content: body.content,
      authorId: userId,
    },
  });
  return c.json({
    id: post.id,
  });
});

blogRouter.put("/", async (c) => {
  const userId = c.get("userId");
  const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();
  const { success } = updatePostInput.safeParse(body);
  if (!success) {
    c.status(400);
    return c.json({ error: "invalid input", c: c });
  }
  prisma.post.update({
    where: {
      id: body.id,
      authorId: userId,
    },
    data: {
      title: body.title,
      content: body.content,
    },
  });

  return c.text("updated post");
});

//@desc GET all Blogs From the User
//@route GET /api/v1/blog/bulk

blogRouter.get("/bulk", async (c) => {
  try{
	const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL,
	  }).$extends(withAccelerate());
	
	  const blogs = await prisma.post.findMany({
		select: {
		  id: true,
		  content: true,
		  title: true,
		  authorId: true,
		  author: {
			select: {
			  name: true,
			},
		  },
		},
	  });
	
	  return c.json({
		blogs,
	  });
  } catch(error){
	return c.json({
		error
	})
  }
});


//@desc get a Specific Blog details
//@route GET /api/v1/blog/:id

blogRouter.get("/:id", async (c) => {
  try{
	const id = c.req.param("id");
  const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL,
  }).$extends(withAccelerate());

  const singleBlog = await prisma.post.findUnique({
    where: {
      id,
    },
    select: {
      id: true,
      title: true,
      content: true,
      authorId: true,
      author: {
        select: {
          name: true,
        }
      }
    }
  });

  return c.json({ singleBlog });
  } catch(error){
	c.status(411);
    return c.json({
      error,
    });
  }
});

//@desc DELETE a Specific Blog With ID
//route /api/v1/blog/:id

blogRouter.delete("/:id", async (c) => {
  try {
    const id = c.req.param("id");
    const prisma = new PrismaClient({
      datasourceUrl: c.env?.DATABASE_URL,
    }).$extends(withAccelerate());

    const deleteBlog = await prisma.post.delete({
      where: {
        id,
      },
    });

    return c.json({
      deleteBlog,
    });
  } catch (error) {
    c.status(411);
    return c.json({
      error,
    });
  }
});
