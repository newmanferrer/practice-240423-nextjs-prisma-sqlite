import { prisma } from '@/lib/prisma/db/client'
import styles from './page.module.scss'

export default async function Home() {
  const user = await prisma.user.findUnique({
    where: { email: 'newmanferrer@test.com' }
  })

  return (
    <main className={styles.container}>
      <h1 className={`${styles.container__title} ${styles.container__title_h1}`}>Next.js 13</h1>
      <h2 className={`${styles.container__title} ${styles.container__title_h2}`}>
        (Prisma with Sqlite)
      </h2>

      <div className={styles.container__user_wrapper}>
        <h3 className={`${styles.container__title} ${styles.container__title_h3}`}>
          Hello, {user ? <span className={styles.container__span}>{user.first_name}</span> : 'user'}
          , from a server component
        </h3>
      </div>
    </main>
  )
}
