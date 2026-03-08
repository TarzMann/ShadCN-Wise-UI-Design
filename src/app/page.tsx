import Image from "next/image"
import Link from "next/link"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ArrowUpCircle, PlusCircle, ChevronDown } from "lucide-react"

/**
 * DESIGNER NOTE: Wise-style dashboard — layout and structure only.
 * All core sections use ShadCN components. Designers can restyle to match Wise UI (colours, typography, spacing).
 *
 * Sections:
 * — Total balance + action buttons (Send, Add money, Request)
 * — Currency account cards (EUR, AUD, CAD, GBP)
 * — Recent transactions list
 * — Footer (Provided by Wise Assets Europe)
 */

const CURRENCY_ACCOUNTS = [
  { code: "EUR", label: "EUR", accountId: "51568", balance: "1.00", flag: "/assets/europe.png" },
  { code: "AUD", label: "AUD", accountId: "30779", balance: "0.00", flag: "/assets/australia.png" },
  { code: "CAD", label: "CAD", accountId: "15376", balance: "0.00", flag: "/assets/canada.png" },
  { code: "GBP", label: "GBP", accountId: "13159", balance: "0.00", flag: "/assets/united-kingdom.png" },
]

const RECENT_TRANSACTIONS = [
  { id: "1", icon: ArrowUpCircle, name: "Hannah Johnson", subtitle: "Sent - 18 Apr", amount: "49 EUR", isCredit: false },
  { id: "2", icon: PlusCircle, name: "To EUR", subtitle: "Added - 18 Apr", amount: "+ 50 EUR", subAmount: "50.44 EUR", isCredit: true },
  { id: "3", icon: ArrowUpCircle, name: "Brandon Bolt", subtitle: "Sent - 2 Apr", amount: "110 EUR", isCredit: false },
]

export default function Home() {
  return (
    <div className="flex flex-1 flex-col gap-14 pt-16 px-6 pb-6 max-w-[976px] w-full mx-auto">
      {/* Total balance + actions */}
      <div className="flex flex-col gap-6">
      <section className="space-y-4">
        <div>
          <h2 className="text-base font-regular text-muted-foreground">Total balance</h2>
          <p className="text-3xl font-semibold tracking-tight">98.00 EUR</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button size="sm" variant="default">
             Send money
          </Button>
          <Button size="sm" variant="secondary">
            Add money
          </Button>
          <Button size="sm" variant="secondary">
            Request money
          </Button>
        </div>
      </section>

      {/* Currency account cards */}
      <section className="flex gap-3 overflow-x-auto pb-2">
        {CURRENCY_ACCOUNTS.map((account) => (
          <Card key={account.code} className="w-[256px] h-[206px] shrink-0 flex flex-col bg-card">
            <CardHeader className="flex flex-row items-center justify-start space-y-0 pb-2">
              <Image src={account.flag} alt={account.label} width={48} height={48} />
              <CardTitle className="text-lg font-semibold text-muted-foreground">{account.label}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-0 mt-auto">
              <div className="flex items-center gap-1">
                <Image src="/assets/icon/bank.png" alt="Bank" width={16} height={16} />
                <p className="text-sm text-muted-foreground">Account - {account.accountId}</p>
              </div>
              <p className="text-2xl font-semibold text-card-foreground">{account.balance}</p>
            </CardContent>
          </Card>
        ))}
      </section>
      </div>

      {/* Recent transactions */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Transactions</h2>
          <Link
            href="/"
            className="text-sm font-semibold text-primary-foreground underline-offset-4 hover:underline"
          >
            See all
          </Link>
        </div>
        <ul className="rounded-lg bg-background">
          {RECENT_TRANSACTIONS.map((tx) => (
            <li key={tx.id} className="flex items-center gap-4 px-4 py-3">
              <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-muted">
                <tx.icon className="size-6 text-muted-foreground" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="font-medium">{tx.name}</p>
                <p className="text-sm text-muted-foreground">{tx.subtitle}</p>
                
              </div>
              <div className="flex flex-col items-end">
              <p className={`shrink-0 text-right font-medium ${tx.isCredit ? "text-primary-foreground" : ""}`}>
                {tx.amount}
              </p>
              {tx.subAmount && (
                  <p className="text-xs text-muted-foreground text-right">{tx.subAmount}</p>
                )}
                </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Footer */}
      <footer className="mt-auto pt-4">
        <p className="text-xs text-muted-foreground">
          Provided by Wise Assets Europe
        </p>
      </footer>
    </div>
  )
}
