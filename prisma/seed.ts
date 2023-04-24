import { prisma } from '../lib/prisma/db/client'

async function main() {
  const user = await prisma.user.upsert({
    where: { email: 'newmanferrer@test.com' },
    update: {},
    create: {
      email: 'newmanferrer@test.com',
      first_name: 'Newman',
      last_name: 'Ferrer',
      password: '1234'
    }
  })

  const user2 = await prisma.user.upsert({
    where: { email: 'amandaferrer@test.com' },
    update: {},
    create: {
      email: 'amandaferrer@test.com',
      first_name: 'Amanda',
      last_name: 'Ferrer',
      password: '5678'
    }
  })

  console.log({ user, user2 })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async error => {
    console.error(error)
    await prisma.$disconnect()
    process.exit(1)
  })
