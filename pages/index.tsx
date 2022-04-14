import Head from 'next/head'
import Header from 'components/Header'
import { Container, Typography } from '@mui/material'
import Logo from 'components/Logo'

const Home = () => (
  <>
    <Head>
      <title>ZIGEN - XR Windowing System</title>
      <meta name="description" content="ZIGEN - A windowing system for XR" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Header />

    <Logo variant="h1" align="center" className="text-6xl mt-12" />
    <Typography variant="h4" align="center" className="font-bold mt-5">
      A windowing system for XR
    </Typography>

    <Container maxWidth="md" className="my-16">
      <Typography paragraph>
        In the modern desktop environment, windowing systems such as X11 or
        Wayland provide a multitasking environment where multi applications from
        different developers work together.
      </Typography>
      <Typography paragraph>
        However, in today’s immersive environment, a single main application
        occupies the user’s entire field of view. This limitation was not fatal
        as long as the primary use of XR was for games that create a unified
        world.
      </Typography>
      <Typography paragraph>
        But now, the use of XR is becoming more diverse, and this limitation can
        no longer be ignored, especially when XR is used as a work environment.
      </Typography>
      <Typography paragraph>
        We need an XR work environment where users can
      </Typography>
      <ul>
        <li>
          <Typography display="inline">
            install and use multiple applications from different developers
            together. Each application should be like an object that occupies
            only a part of the user&apos;s view, and data transferring such as
            &quot;drag and drop&quot; between those 3D applications should be
            supported.
          </Typography>
        </li>
        <li>
          <Typography display="inline">
            develop an application they want, and use it together with other
            applications.
          </Typography>
        </li>
      </ul>
      <Typography paragraph className="font-bold">
        ZIGEN makes these things happen!
      </Typography>
    </Container>
  </>
)

export default Home
