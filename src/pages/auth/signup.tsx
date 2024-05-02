import { Helmet } from 'react-helmet-async'
import {} from 'react-hook-form'
import { Link } from 'react-router-dom'

import { Button } from '../../components/ui/button'
import { Input } from '../../components/ui/input'
import { Label } from '../../components/ui/label'

export function Signup() {
  return (
    <>
      <Helmet title="Sign-Up" />
      <div className="p-8">
        <Button asChild className="absolute right-8 top-8" variant={'ghost'}>
          <Link to="/sign-in">Já tenho conta</Link>
        </Button>
        <div className="flex w-[350px] flex-col items-center justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Acessar painel
            </h1>
            <p className="text-sm text-muted-foreground">
              Acompanhe suas vendas pelo painl parceiro
            </p>
          </div>
          <form className="w-full space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Seu e-mail</Label>
              <Input />
            </div>
            <Button className="w-full">Finalizar cadastro</Button>
          </form>
        </div>
      </div>
    </>
  )
}