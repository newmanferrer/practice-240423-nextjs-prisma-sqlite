import { prisma } from '@/lib/prisma/db/client'
import type { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import styles from './example.module.scss'

type Props = InferGetServerSidePropsType<typeof getServerSideProps>

export default function ExamplePage({ user }: Props) {
  return (
    <main className={styles.container}>
      <h1 className={`${styles.container__title} ${styles.container__title_h1}`}>Example Page</h1>

      <div className={styles.container__user_wrapper}>
        <h2 className={`${styles.container__title} ${styles.container__title_h2}`}>
          Hello, {user ? <span className={styles.container__span}>{user.first_name}</span> : 'user'}
          , from a client component
        </h2>
      </div>
    </main>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const user = await prisma.user.findUnique({
    where: {
      email: 'amandaferrer@test.com'
    }
  })

  return {
    props: {
      user
    }
  }
}
