import Button from './components/ui/Button'
import Badge from './components/ui/Badge'
import Footer from './components/layout/Footer'
import Header from './components/layout/Header'
import { contactEmail } from './data/contact'
import { githubProfileUrl } from './data/socialLinks'

function App() {
  return (
    <div>
      <Header />
      <main id="home" className="min-h-screen bg-surface px-gutter py-stack-2xl text-text">
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-stack-2xl">
          <header className="flex flex-col gap-stack-sm">
            <p className="text-tag font-medium tracking-label text-muted uppercase">
              Design system temporário
            </p>
            <h1 className="font-heading text-display font-medium tracking-heading">Yan Porfirio</h1>
            <p className="max-w-2xl text-subtitle leading-relaxed text-muted">
              Paleta, tipografia, espaçamentos, raios e sombras extraídos do projeto original.
            </p>
          </header>

          <section aria-labelledby="palette-title" className="flex flex-col gap-stack-md">
            <h2 id="palette-title" className="text-heading-md">
              Paleta
            </h2>
            <div className="grid gap-stack-md sm:grid-cols-2 tablet:grid-cols-4">
              <div className="rounded-card border border-border bg-surface-card p-card">
                <div className="mb-stack-md h-16 rounded-project-card border border-border bg-surface" />
                <p className="font-medium">Surface</p>
                <p className="text-caption text-muted">#000000</p>
              </div>
              <div className="rounded-card border border-border bg-surface-card p-card">
                <div className="mb-stack-md h-16 rounded-project-card bg-surface-raised" />
                <p className="font-medium">Surface raised</p>
                <p className="text-caption text-muted">#0a0a0a</p>
              </div>
              <div className="rounded-card border border-border bg-surface-card p-card">
                <div className="mb-stack-md h-16 rounded-project-card bg-primary" />
                <p className="font-medium">Primary</p>
                <p className="text-caption text-muted">#ffffff</p>
              </div>
              <div className="rounded-card border border-border bg-surface-card p-card">
                <div className="mb-stack-md h-16 rounded-project-card bg-accent-muted" />
                <p className="font-medium">Accent muted</p>
                <p className="text-caption text-muted">#a1a1a6</p>
              </div>
            </div>
          </section>

          <section aria-labelledby="type-title" className="flex flex-col gap-stack-md">
            <h2 id="type-title" className="text-heading-md">
              Tipografia
            </h2>
            <div className="rounded-card border border-border bg-surface-card p-card">
              <p className="text-tag text-subtle">Poppins 500 · 0.8rem</p>
              <p className="mt-stack-sm text-body-lg leading-relaxed text-muted">
                I am a Full Stack developer building clean and accessible user experiences.
              </p>
              <p className="mt-stack-lg font-heading text-heading-sm font-semibold">
                Heading small
              </p>
              <p className="font-heading text-heading-md">Heading medium</p>
            </div>
          </section>

          <section aria-labelledby="controls-title" className="flex flex-col gap-stack-md">
            <h2 id="controls-title" className="text-heading-md">
              Botões e superfícies
            </h2>
            <div className="flex flex-wrap items-center gap-stack-md rounded-card border border-border bg-surface-card p-card shadow-card">
              <Button href={githubProfileUrl} target="_blank">
                Visit Github
              </Button>
              <Button variant="secondary" href={`mailto:${contactEmail}`}>
                Send Email
              </Button>
              <Badge>In planning</Badge>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App
