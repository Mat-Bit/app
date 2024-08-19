import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    h1: ({ children }) => (
      <h1 className="unbound-font text-[34px] font-bold text-[#1A1A1A]">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="unbound-font text-[24px] text-[#1A1A1A]">{children}</h2>
    ),
    p: ({ children }) => (
      <p className="text-[16px] text-[#1A1A1A]">{children}</p>
    ),
    a: ({ children }) => (
      <a className="text-[16px] text-[#E6007A] border-b-[#E6007A] border-b-[1px]">
        {children}
      </a>
    ),
    li: ({ children }) => <li className="list-disc list-inside">{children}</li>,
  };
}
