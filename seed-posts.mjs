import postgres from "postgres";
import { drizzle } from "drizzle-orm/postgres-js";

const client = postgres(process.env.DATABASE_URL || "");
const db = drizzle(client);

const blogContent = `# How I Started Finding Vulnerabilities Consistently

In the beginning of my bug bounty journey, I couldn't find any vulnerabilities. and when I did, they were usually **duplicates**.

But over time, I focused on improving my mindset and the way I think during testing.

Thankfully, today I have a methodology that I follow to test for vulnerabilities like **\`IDOR\`**, **\`access control issues\`**, **\`business logic flaws\`**, and more.

And in this blog, I'll walk you through exactly how I approach it.

---

## The First Step

I start by using the website for **at least one hour** to understand:

- what the platform offers
- what Frameworks it use
- what functions it has

This step isn't anything new. anyone testing the vulnerabilities I mentioned above does this.

---

## After That

I create **two accounts** using **two different browsers.** for example, one on **Chrome** and the other on **Safari.** and then I open **Burp Suite**.

These are the *only* tools I use when testing these vulnerabilities.

I also **disable Burp's active scanners** (an important step) 

because they consume a lot of RAM and can cause Burp to crash after a short time.

---

## Before I Start Testing

- I collect all the **API endpoints** found in the website's JavaScript files, either **manually** or using **a tool I built myself**.
- I don't mind sharing the tool.
If you need it, contact me on LinkedIn and I'll send it to you.

In most websites, the endpoint's **path** or **query parameters** give you a clear idea of what it does (in **REST APIs**).

With **GraphQL**, it's even easier: the **query** or **mutation** is literally named after its function.

I then store all the endpoints in a single text file:

---

## Next Step

I begin testing the website using **Burp** and the **two browsers**.

For each endpoint, I test for:

- **IDOR**
- **Broken access control**
- **Business logic flaws**
- **Math assignment issues**
- **Price manipulation**

Once I finish testing an endpoint, I **mark it** in my file so I don't waste time re-testing it.

---

## Stage One Complete

### Stage Two

Let's say I collected **100 endpoints**.

I often discover that I've only tested around **50**.

So I look at the remaining untested endpoints, and from their paths or parameters, I try to find where they appear in the application interface.

This helps me identify **hidden buttons** or **functions** I didn't notice during normal usage.

For example, if I find **30 new endpoints**, I test them the same way I described earlier. and the chances of finding vulnerabilities in them are much higher.

---

## The Third and Final Stage

By this point, I usually have about **20 endpoints left**.

These are often the **juicy** ones:

- endpoints for **premium features**
- old functions removed from the frontend but still active in the backend
- rarely used or undocumented features

I take each of these endpoints from my notes and search for them inside the JavaScript files.

I identify:

- the **request method**
- the **body parameters**
- and any related logic

Because I've already tested many endpoints, I now understand the website's structure and parameter patterns very well.

**These endpoints are where I find the most vulnerabilities. and they are rarely duplicates. because most researchers never reach them.**

---

## One of the Most Important Rules in Bug Bounty

**The more you improve your mindset, the more vulnerabilities you will find. and the further you will stay from duplicates.**

---

## Final Thoughts

It's important in bug bounty to always search in places that others overlook.

But at the same time, you still need to test the website normally in the beginning.

In the end, bug bounty is simply about **consistency.** nothing more.

---

## A Final Note

This approach may not be new to you, but I wanted to share it because it can help many people test websites in a more accurate and effective way.

And if you ever need anything, don't hesitate to contact me on LinkedIn.

Best regards.`;

const excerpt = "In the beginning of my bug bounty journey, I couldn't find any vulnerabilities. But over time, I focused on improving my mindset and developed a methodology to test for IDOR, access control issues, business logic flaws, and more.";

try {
  await db.insert(posts).values({
    title: "How I Started Finding Vulnerabilities Consistently",
    slug: "how-i-started-finding-vulnerabilities-consistently",
    content: blogContent,
    excerpt: excerpt,
    published: new Date(),
  });
  
  console.log("✓ Blog post inserted successfully!");
  process.exit(0);
} catch (error) {
  console.error("Error inserting blog post:", error);
  process.exit(1);
}
