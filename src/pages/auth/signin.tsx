import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

import { Button } from '../../components/ui/button'
import { Input } from '../../components/ui/input'
import { Label } from '../../components/ui/label'
export function Signin() {
  const { register, handleSubmit } = useForm()

  function handleSiginin() {}

  return (
    <>
      <Helmet title="Sign-in" />
      <div className="p-8">
        <Button asChild className="absolute right-8 top-8" variant={'ghost'}>
          <Link to="/sign-up">Novo Estabelecimento</Link>
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
          <form
            className="w-full space-y-4"
            onSubmit={handleSubmit(handleSiginin)}
          >
            <div className="space-y-2">
              <Label htmlFor="email" {...register('email')}>
                Seu e-mail
              </Label>
              <Input />
            </div>
            <Button className="w-full">Acessar Painel</Button>
          </form>
        </div>
      </div>
    </>
  )
}
