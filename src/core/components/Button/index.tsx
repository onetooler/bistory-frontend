import { ReactNode } from "react"

function Button({ className, variant, children }: { className?: any, variant?: string, children: ReactNode}) {
  return <button className={className}>{children}버튼</button>
}

export default Button