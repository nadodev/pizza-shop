import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { toast } from 'sonner'
import { z } from 'zod'

import { Button } from '../../components/ui/button'
import { Input } from '../../components/ui/input'
import { Label } from '../../components/ui/label'

const signinForm = z.object({
  email: z.string().email({ message: 'E-mail invalido' }),
})

type SigninForm = z.infer<typeof signinForm>
export function Signin() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SigninForm>()

  async function handleSiginin(data: SigninForm) {
    console.log(data)
    toast.success('My first toast', {
      action: {
        label: 'Reenviar',
        onClick: () => {},
      },
    })
    await new Promise((resolve) => setTimeout(resolve, 2000))
  }

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
              <Label htmlFor="email">Seu e-mail</Label>
              <Input {...register('email')} />
            </div>
            <Button className="w-full" disabled={isSubmitting}>
              Acessar Painel
            </Button>
          </form>
        </div>
      </div>
    </>
  )
}
