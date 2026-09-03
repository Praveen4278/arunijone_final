import { Switch, Route } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HomeDesktop } from "@/pages/home/HomeDesktop";
import { About } from "@/pages/about/About";
import { ServicePage } from "@/pages/explore/ServicePage";
import Portfolio1UXUIUIDesignWebsite from "@/pages/Portfolio1";
import Portfolio2 from "@/pages/Portfolio2";
import Portfolio3 from "@/pages/Portfolio3";
import Portfolio4 from "@/pages/Portfolio4";
import BlogDesktop from "@/pages/Blog";
import ContactDesktop from "@/pages/Contact";
import FAQDesktop from "@/pages/FAQ";
import FAQDetailsDesktop from "@/pages/FAQDetails";
import BlogDetails from "@/pages/BlogDetails";

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={HomeDesktop} />
      <Route path="/about" component={About} />
      <Route path="/explore" component={ServicePage} />
      <Route path="/blog" component={BlogDesktop} />
      <Route path="/portfolio1" component={Portfolio1UXUIUIDesignWebsite} />
      <Route path="/portfolio2" component={Portfolio2} />
      <Route path="/portfolio3" component={Portfolio3} />
      <Route path="/portfolio4" component={Portfolio4} />
      <Route path="/contact" component={ContactDesktop} />
      <Route path="/faq" component={FAQDesktop} />
      <Route path="/faq-details" component={FAQDetailsDesktop} />
      <Route path="/blog-details" component={BlogDetails} />
    </Switch>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
    </QueryClientProvider>
  );
}
