import { z } from 'zod'
//Informamos qual é o formato que se espera do usuário
//nesse caso o usuário precisa ser um objeto >> 'z.object()'
const userSchema = z.object({
  //Infomamos que o nome é uma string
  //e que tem que ter um min. de 3 caracteres
  //tb faz a transformação do nome para maiúsculo (TOP!!)
  name: z.string()
  .min(3, { message: 'O nome precisa de 3 caracteres.' })
  .transform(name => name.toLocaleUpperCase()),
  age: z.number().min(18, { message: 'A idade mínima é 18 anos.' })
})
//vai usar o z.infer (inferência / deduzir) a partir do tipo userSchema
type User = z.infer<typeof userSchema>

function SaveUserOnDatabase(user: User) {
  const { name, age } = userSchema.parse(user)
  console.log(name, age)
}

SaveUserOnDatabase({
  name: 'Ricardo',
  age: 18
})