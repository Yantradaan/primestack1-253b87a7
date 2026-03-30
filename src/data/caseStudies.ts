export interface CaseStudy {
  slug: string;
  title: string;
  subtitle: string;
  client: string;
  platform: string;
  technologies: string[];
  focus: string;
  year: string;
  excerpt: string;
  sections: {
    title: string;
    content: string;
    bullets?: string[];
    table?: { headers: string[]; rows: string[][] };
  }[];
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "sharepoint-salesforce-content-integration",
    title: "SharePoint & Salesforce Content Integration",
    subtitle: "Secure Enterprise Content Delivery via Experience Cloud",
    client: "Enterprise Client",
    platform: "Salesforce Sales Cloud & Experience Cloud",
    technologies: ["Salesforce Sales Cloud", "Experience Cloud", "SharePoint", "jsTree", "REST API"],
    focus: "Secure Content Integration",
    year: "2024–2025",
    excerpt: "A unified platform to securely deliver enterprise content from SharePoint to external users via Salesforce Experience Cloud with role-based access control.",
    sections: [
      {
        title: "Executive Summary & Challenge",
        content: "The client required a unified platform to securely deliver enterprise content, primarily hosted in SharePoint, to external users accessing through Salesforce Experience Cloud. The key challenge was establishing a secure, real-time, bi-directional integration that respected both the Salesforce Role Hierarchy and existing SharePoint permissions, while presenting a seamless, native file-management experience.",
      },
      {
        title: "Technology & Implementation Stack",
        content: "The solution leveraged a multi-platform architecture combining Salesforce and SharePoint capabilities.",
        table: {
          headers: ["Component", "Role", "Functionality"],
          rows: [
            ["Salesforce Sales Cloud", "Core CRM/Backend", "Manages user profiles, Role Hierarchy, and Named Credentials for integration authentication."],
            ["Salesforce Experience Cloud", "Client-Facing Portal", "The UI layer where external users access and interact with the file structure."],
            ["SharePoint", "Content Repository", "Stores the authoritative files, documents, and videos with native file-level access control."],
            ["jsTree", "UI Library", "Renders nested file and folder data into an interactive Tree Structure."],
            ["REST API", "Integration Bridge", "Communication protocol for all data transfers between platforms."],
          ],
        },
      },
      {
        title: "Architecture & Integration Methodology",
        content: "The integration relies on a server-to-server connection authenticated via REST API calls initiated from Salesforce.",
        bullets: [
          "Named Credentials: Used within Salesforce to manage authentication parameters for accessing SharePoint, abstracting endpoint URLs and credentials from Apex code.",
          "SharePoint to Salesforce: When a user logs into Experience Cloud, a query is sent to SharePoint via REST API to retrieve the relevant file list. Webhooks trigger Salesforce updates when new files are saved.",
          "Salesforce to SharePoint: File uploads from Experience Cloud are sent via REST API to the designated SharePoint site, preserving user context and role mapping.",
          "Tree Structure (jsTree): The display mirrors the folder hierarchy exactly, providing an intuitive, Windows Explorer-like view for navigating deep folder structures.",
          "In-App Functionality: Users can Download files, Preview documents, and Play Videos within the community site without navigating away.",
        ],
      },
      {
        title: "Security, Access Control & Governance",
        content: "A critical success factor was the granular access control implemented based on the corporate hierarchy.",
        bullets: [
          "Role Hierarchy Mapping: Access is governed by Salesforce Role Hierarchy — users see only files owned by their linked SharePoint account or by users below them in the hierarchy.",
          "Data Integrity: Bi-directional sync ensures data governance — SharePoint remains the single source of truth while Salesforce acts as the secure access layer.",
        ],
      },
      {
        title: "Conclusion & Business Impact",
        content: "This implementation successfully leveraged Salesforce Sales Cloud and Experience Cloud to solve a complex content integration challenge. By utilizing REST API and Named Credentials for secure communication, and mapping access to the Salesforce Role Hierarchy, the client achieved a secure, scalable, and highly usable content portal. The result is improved client satisfaction and greater administrative efficiency by centralizing content access control through the robust Salesforce platform.",
      },
    ],
  },
  {
    slug: "refugee-program-portal-accessibility",
    title: "Refugee Program Portal — Accessibility",
    subtitle: "Inclusive & Accessible Program Selection on Salesforce Experience Cloud",
    client: "Humanitarian Services — Refugee Assistance Program",
    platform: "Salesforce Experience Cloud",
    technologies: ["OmniStudio", "Lightning Web Components (LWC)", "NVDA", "ARIA", "WCAG 2.1 AA"],
    focus: "Accessible Program Selection Portal",
    year: "2024–2025",
    excerpt: "A fully accessible Salesforce portal enabling refugees — including visually impaired users — to independently browse, select, and enroll in aid programs via keyboard and screen reader.",
    sections: [
      {
        title: "Executive Summary",
        content: "This case study documents the design, development, and accessibility implementation of the Refugee Program Portal — a Salesforce Experience Cloud solution built to enable refugees and displaced individuals to browse, select, and enroll in aid and support programs. A defining requirement was full accessibility for visually impaired users, navigating entirely via keyboard with spoken audio feedback powered by NVDA.",
      },
      {
        title: "Background & Challenge",
        content: "Refugee populations face compounding barriers when accessing aid programs — language differences, low digital literacy, and visual impairments.",
        bullets: [
          "No keyboard-only navigation path existed in prior program selection flows.",
          "Standard OmniStudio components lacked ARIA labels and screen-reader-friendly markup.",
          "Dynamic program filtering was not announcing state changes to assistive technologies.",
          "Tab order was inconsistent across OmniScript steps, breaking logical reading flow.",
          "Audio feedback was absent — no auditory cues for selection or step advancement.",
        ],
      },
      {
        title: "Solution Architecture",
        content: "The solution combined OmniStudio for declarative workflows with custom Lightning Web Components for enhanced accessibility logic and UI rendering.",
        table: {
          headers: ["User Layer", "Salesforce Platform", "Data Layer"],
          rows: [
            ["Sighted User", "Experience Cloud Portal", "DataRaptor"],
            ["Visually Impaired User", "OmniStudio FlexCards", "Salesforce Objects"],
            ["Mobile / Desktop", "Lightning Web Components", "Program Records"],
          ],
        },
      },
      {
        title: "OmniStudio & LWC Implementation",
        content: "OmniStudio FlexCards and OmniScripts formed the backbone of the program selection experience.",
        bullets: [
          "FlexCards extended with custom ARIA roles (role=\"listitem\", aria-selected, aria-label) via custom HTML actions.",
          "OmniScript steps structured as a logical wizard with explicit heading hierarchy (h1 → h2 → h3).",
          "Each program card LWC rendered with focusable container (tabindex=\"0\") for keyboard navigation.",
          "Live regions (aria-live=\"polite\") announced dynamic content changes without requiring focus movement.",
          "Focus trapping logic implemented for modal confirmation dialogs.",
          "Custom keyboard event handlers managed arrow key navigation within program lists.",
        ],
      },
      {
        title: "Accessibility Implementation",
        content: "NVDA was the primary screen reader used for development testing and QA validation.",
        bullets: [
          "Every interactive element tested for correct NVDA announcement of role, name, and state.",
          "OmniScript step labels surfaced as page titles for NVDA step announcements.",
          "Form error messages linked to input fields via aria-describedby.",
          "Full enrollment journey completable using only Tab, Shift+Tab, Enter, Space, and arrow keys.",
        ],
        table: {
          headers: ["Action", "Key", "NVDA Announcement"],
          rows: [
            ["Navigate programs", "Tab / Shift+Tab", "Program name, category, eligibility status"],
            ["Select a program", "Enter / Space", "[Program Name] — Selected. 2 of 5 programs selected."],
            ["Apply a filter", "Enter on filter chip", "Filter: Health Services applied. 12 programs shown."],
            ["Advance to next step", "Tab to Next → Enter", "Step 3 of 5: Review Selection — page loaded."],
          ],
        },
      },
      {
        title: "Technical Highlights",
        content: "Key technical innovations that made the portal fully accessible.",
        bullets: [
          "Custom ARIA Live Announcer LWC: A singleton component injecting an aria-live region at the page level for dynamic state change announcements.",
          "OmniScript Focus Management Override: Custom JavaScript to programmatically set focus to step headings on transitions.",
          "FlexCard Accessible Program Cards: Extended with role=\"list\" / role=\"listitem\" structure and computed aria-labels.",
          "Skip Navigation & Landmark Regions: Added skip-to-content links and ARIA landmark roles for quick navigation.",
        ],
      },
      {
        title: "Outcomes & Impact",
        content: "The portal was delivered with full WCAG 2.1 AA compliance, independently validated through accessibility audit.",
        bullets: [
          "100% WCAG 2.1 AA: All pages passed WAVE and axe automated scans with zero critical violations.",
          "Full keyboard-only navigation: End-to-end enrollment completable without a mouse.",
          "NVDA + JAWS validated: Tested and approved on both screen readers.",
          "Visually impaired users independently completed program enrollment without caseworker assistance.",
          "Portal set a new internal accessibility standard for the organization's Salesforce implementations.",
        ],
      },
    ],
  },
];
