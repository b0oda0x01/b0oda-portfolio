import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import AbdelrahmanAtefHome from "@/pages/abdelrahman_atef_home";
import AbdelrahmanAtefBio from "@/pages/abdelrahman_atef_bio";
import AbdelrahmanAtefContacts from "@/pages/abdelrahman_atef_contacts";
import BlogsList from "@/pages/blogs-list";
import BlogPost from "@/pages/blog-post";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={AbdelrahmanAtefHome} />
      <Route path="/bio" component={AbdelrahmanAtefBio} />
      <Route path="/contacts" component={AbdelrahmanAtefContacts} />
      <Route path="/blogs" component={BlogsList} />
      <Route path="/blog/:slug" component={BlogPost} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
