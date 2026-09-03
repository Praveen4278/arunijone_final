import React from "react";

const sections = [
  { title: "Executive Overview and Platform Genesis", body: "MyRameswaramTrip.com operates as a highly specialized, high-availability digital travel and spiritual booking platform, specifically architected to serve the unique needs of pilgrims and tourists visiting the sacred island of Rameswaram. The system guarantees 99.9% uptime, a 50ms average response time, a 99% booking success rate, and a 99% customer satisfaction rate." },
  { title: "Macro-Architecture and Distributed Microservices Design", body: "The platform is built upon a distributed microservices model separating the application into distinct, loosely coupled services. It operates on over 10 distinct platform modules and supports more than 6 distinct service types, with each module scaling independently based on CPU and memory utilization." },
  { title: "Backend Engineering: The Golang Ecosystem", body: "The selection of Golang as the foundational backend programming language represents a calculated, strategic decision. Go was explicitly engineered to resolve the bottlenecks inherent in server-side application development, specifically addressing the challenges of massive concurrency, multi-core processing, and network latency." },
  { title: "The Goroutine Concurrency Model", body: "At the core of the platform's backend efficiency is its utilization of Go's native concurrency primitives: Goroutines and channels. A Goroutine is an ultra-lightweight, user-space thread managed dynamically by the Go runtime, requiring only a few kilobytes of initial memory allocation." },
  { title: "Advanced Database Architecture: PostgreSQL and pgxpool", body: "The persistence layer relies exclusively on PostgreSQL for strict ACID compliance. The pgxpool operates as an intelligent client-side connection manager, maintaining a reservoir of pre-authenticated, persistent connections to eliminate per-request connection overhead and reduce database interaction latency to sub-millisecond ranges." },
  { title: "Frontend Engineering, SEO Optimization, and Next.js", body: "The frontend utilizes Next.js Server-Side Rendering (SSR) and Static Site Generation (SSG). When a client requests a page, the rendering process occurs on the server, compiling a fully populated HTML document that enables immediate crawler indexing and optimized Core Web Vitals." },
  { title: "Deployment Paradigm, CI/CD, and Observability Telemetry", body: "The application modules are containerized using Docker and orchestrated across cloud infrastructure using Kubernetes or Docker Swarm. CI/CD pipelines automatically compile, test, and deploy code using zero-downtime rolling deployment strategies. The platform uses Prometheus and Grafana for real-time observability." },
];

export default function MobDevelopmentMain() {
  return (
    <div
      style={{
        width: "100%",
        background: "#FFFFFF",
        borderRadius: 20,
        padding: "30px 16px",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        gap: 20,
      }}
    >
      <div style={{ border: "1px solid #202833", borderRadius: 228, padding: "6px 16px", alignSelf: "flex-start", display: "inline-flex" }}>
        <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 500, fontSize: 11, letterSpacing: 1.716, textTransform: "uppercase", color: "#202833", whiteSpace: "nowrap" }}>
          Dev Report
        </span>
      </div>
      <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 400, fontSize: 24, lineHeight: "32px", color: "#111111" }}>
        Database Architecture &amp; Optimization
      </span>
      <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 400, fontSize: 14, lineHeight: "22px", color: "rgba(109,109,110,0.8)" }}>
        Technical Architecture and Development Paradigm of MyRameswaramTrip.com
      </span>
      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        {sections.map(({ title, body }) => (
          <div key={title} style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 500, fontSize: 16, lineHeight: "24px", color: "#191615" }}>{title}</span>
            <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 400, fontSize: 14, lineHeight: "22px", color: "#808080" }}>{body}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
