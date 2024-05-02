import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { toast } from 'sonner'
import { z } from 'zod'

import { Button } from '../../components/ui/button'
import { Input } from '../../components/ui/input'
import { Label } from '../../components/ui/label'

const signupForm = z.object({
  restaurantName: z.string(),
  managerName: z.string(),
  phone: z.string(),
  email: z.string().email({ message: 'E-mail invalido' }),
})

type SignUpForm = z.infer<typeof signupForm>
export function Signup() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignUpForm>()

  async function handleSiginin(data: SignUpForm) {
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
      <Helmet title="Sign-up" />
      <div className="p-8">
        <Button asChild className="absolute right-8 top-8" variant={'ghost'}>
          <Link to="/sign-in">Já tenho conta</Link>
        </Button>
        <div className="flex w-[350px] flex-col items-center justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Criar conta grátis
            </h1>
            <p className="text-sm text-muted-foreground">
              Seja um parceiro e comece suas vendas
            </p>
          </div>
          <form
            className="w-full space-y-4"
            onSubmit={handleSubmit(handleSiginin)}
          >
            <div className="space-y-2">
              <Label htmlFor="restaurantName">Nome do Estabelecimento</Label>
              <Input {...register('restaurantName')} id="restaurantName" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="managerName">Seu Nome</Label>
              <Input {...register('managerName')} id="managerName" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Seu e-mail</Label>
              <Input {...register('email')} id="email" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Seu celular</Label>
              <Input {...register('phone')} id="phone" type="tel" />
            </div>
            <Button className="w-full" disabled={isSubmitting}>
              Cadastrar
            </Button>

            <p className="px-6 text-center text-sm text-muted-foreground">
              Ao continuar, você concorda com nossos
              <a href="#" className="underline underline-offset-2">
                <br /> termos de serviços
              </a>
              e
              <a href="#" className="underline underline-offset-2">
                política de privacidade
              </a>
              .
            </p>
          </form>
        </div>
      </div>
    </>
  )
}
