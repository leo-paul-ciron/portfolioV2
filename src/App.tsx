import { useEffect, useMemo, useState } from 'react'
import {
  Box,
  Container,
  Typography,
  Stack,
  Chip,
  Card,
  CardContent,
  Divider,
  Button,
  ToggleButton,
  ToggleButtonGroup,
  TextField,
  Snackbar,
  CssBaseline,
  ThemeProvider,
} from '@mui/material'
import Grid from '@mui/material/Grid'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone'
import LanguageIcon from '@mui/icons-material/Language'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome'
import BuildIcon from '@mui/icons-material/Build'
import CallSplitIcon from '@mui/icons-material/CallSplit'
import CodeIcon from '@mui/icons-material/Code'
import DataObjectIcon from '@mui/icons-material/DataObject'
import DnsIcon from '@mui/icons-material/Dns'
import HubIcon from '@mui/icons-material/Hub'
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions'
import LayersIcon from '@mui/icons-material/Layers'
import StorageIcon from '@mui/icons-material/Storage'
import TerminalIcon from '@mui/icons-material/Terminal'
import WebIcon from '@mui/icons-material/Web'
import profile from './data/profile'
import avatar from './assets/avatar.jpg'
import getTheme from './theme'

const SectionTitle = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <Stack spacing={1.5} sx={{ mb: 4 }}>
    <Typography variant="overline" sx={{ color: 'primary.main', letterSpacing: '0.3em' }}>
      {title}
    </Typography>
    {subtitle ? (
      <Typography variant="h3" sx={{ maxWidth: 760 }}>
        {subtitle}
      </Typography>
    ) : null}
  </Stack>
)

const AccentLine = () => (
  <Box
    sx={{
      width: 80,
      height: 2,
      background: 'linear-gradient(90deg, rgba(10,132,255,1) 0%, rgba(10,132,255,0.2) 100%)',
      borderRadius: 999,
      mb: 3,
    }}
  />
)

const GlassCard = ({
  children,
  sx,
}: {
  children: React.ReactNode
  sx?: object
}) => (
  <Card
    sx={{
      borderRadius: 4,
      border: '1px solid var(--card-border)',
      boxShadow: 'var(--card-shadow)',
      background: 'var(--card-bg)',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      ...sx,
    }}
  >
    {children}
  </Card>
)

const skillIconMap: Record<string, JSX.Element> = {
  Agile: <AutoAwesomeIcon />,
  Angular: <LayersIcon />,
  Java: <DataObjectIcon />,
  JavaScript: <CodeIcon />,
  Laravel: <BuildIcon />,
  NestJS: <HubIcon />,
  Nx: <IntegrationInstructionsIcon />,
  PHP: <CodeIcon />,
  PowerShell: <TerminalIcon />,
  SQL: <StorageIcon />,
  Symfony: <DnsIcon />,
  TypeScript: <IntegrationInstructionsIcon />,
  WordPress: <WebIcon />,
  Docker: <LayersIcon />,
  Git: <CallSplitIcon />,
}

function App() {
  const [lang, setLang] = useState<'fr' | 'en'>('fr')
  const [snackOpen, setSnackOpen] = useState(false)
  const [formState, setFormState] = useState({ name: '', email: '', message: '' })
  const [mode, setMode] = useState<'light' | 'dark'>(() => {
    const stored = localStorage.getItem('portfolio-theme')
    return stored === 'dark' ? 'dark' : 'light'
  })

  const content = useMemo(() => profile.locales[lang], [lang])
  const muiTheme = useMemo(() => getTheme(mode), [mode])

  useEffect(() => {
    const handleScroll = () => {
      document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.dataset.theme = mode
    localStorage.setItem('portfolio-theme', mode)
  }, [mode])

  const handleFormChange = (field: 'name' | 'email' | 'message', value: string) => {
    setFormState((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    const subject = lang === 'fr' ? 'Contact portfolio' : 'Portfolio contact'
    const body = `Nom/Name: ${formState.name}\nEmail: ${formState.email}\n\n${formState.message}`
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setSnackOpen(true)
    setFormState({ name: '', email: '', message: '' })
  }

  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      <Box>
      <Box
        sx={{
          pt: { xs: 6, md: 10 },
          pb: { xs: 6, md: 10 },
        }}
      >
        <Container>
          <Stack direction="row" justifyContent="flex-end" sx={{ mb: 3 }} spacing={1}>
            <ToggleButton
              value="theme"
              onClick={() => setMode((prev) => (prev === 'light' ? 'dark' : 'light'))}
              sx={{
                borderRadius: 999,
                border: mode === 'light' ? '1px solid rgba(29,29,31,0.12)' : '1px solid rgba(90,162,255,0.25)',
                backgroundColor: mode === 'light' ? 'rgba(255,255,255,0.8)' : 'rgba(20,20,25,0.8)',
                minWidth: 44,
              }}
            >
              {mode === 'light' ? <DarkModeOutlinedIcon fontSize="small" /> : <LightModeOutlinedIcon fontSize="small" />}
            </ToggleButton>
            <ToggleButtonGroup
              size="small"
              exclusive
              value={lang}
              onChange={(_, value) => value && setLang(value)}
              sx={{
                backgroundColor: mode === 'light' ? 'rgba(255,255,255,0.8)' : 'rgba(20,20,25,0.8)',
                borderRadius: 999,
                border: mode === 'light' ? '1px solid rgba(29,29,31,0.12)' : '1px solid rgba(90,162,255,0.25)',
              }}
            >
              <ToggleButton value="fr">FR</ToggleButton>
              <ToggleButton value="en">EN</ToggleButton>
            </ToggleButtonGroup>
          </Stack>
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={7}>
              <Box sx={{ position: 'relative' }}>
                <Box
                  sx={{
                    position: 'absolute',
                    inset: { xs: -12, md: -24 },
                    background:
                      mode === 'light'
                        ? 'linear-gradient(90deg, rgba(245,245,247,0.98) 0%, rgba(245,245,247,0.82) 65%, rgba(245,245,247,0) 100%)'
                        : 'linear-gradient(90deg, rgba(12,12,16,0.95) 0%, rgba(12,12,16,0.78) 65%, rgba(12,12,16,0) 100%)',
                    zIndex: 0,
                    pointerEvents: 'none',
                  }}
                />
                <Stack spacing={3} sx={{ position: 'relative', zIndex: 1 }}>
                  <Typography variant="overline" sx={{ color: 'primary.main', letterSpacing: '0.35em' }}>
                    Portfolio
                  </Typography>
                  <Box sx={{ position: 'relative', display: 'inline-flex', alignItems: 'center' }}>
                  <Box
                    sx={{
                      position: 'absolute',
                      left: { xs: -28, md: -40 },
                      top: { xs: -36, md: -48 },
                      width: { xs: 160, md: 230 },
                      height: { xs: 160, md: 230 },
                      borderRadius: '34%',
                      backgroundImage: `url(${avatar})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      filter: 'grayscale(0.05) contrast(1.05)',
                      opacity: 0.45,
                      boxShadow: '0 22px 50px rgba(15, 15, 20, 0.15)',
                      transform: 'translateY(calc(var(--scroll-y) * 0.22))',
                      zIndex: 0,
                      pointerEvents: 'none',
                    }}
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      left: { xs: 8, md: 18 },
                      top: { xs: -18, md: -24 },
                      width: { xs: 180, md: 260 },
                      height: { xs: 180, md: 260 },
                      borderRadius: '40%',
                      border: '1px solid rgba(10, 132, 255, 0.35)',
                      boxShadow: '0 12px 30px rgba(10, 132, 255, 0.2)',
                      transform: 'translateY(calc(var(--scroll-y) * 0.12))',
                      zIndex: 0,
                      pointerEvents: 'none',
                    }}
                  />
                  <Typography
                    variant="h1"
                    sx={{
                      fontSize: { xs: '2.8rem', md: '4.4rem' },
                      position: 'relative',
                      zIndex: 1,
                      textShadow:
                        mode === 'light'
                          ? '0 8px 18px rgba(255,255,255,0.9)'
                          : '0 8px 18px rgba(0,0,0,0.6)',
                    }}
                  >
                    {profile.name}
                  </Typography>
                  </Box>
                  <Typography variant="h4" sx={{ color: 'text.secondary', fontWeight: 500 }}>
                    {content.title}
                  </Typography>
                  <Typography variant="subtitle1" sx={{ maxWidth: 560 }}>
                    {content.about}
                  </Typography>
                  <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
                    <Chip icon={<PhoneIphoneIcon />} label={profile.phone} />
                    <Chip icon={<MailOutlineIcon />} label={profile.email} />
                    <Chip icon={<LanguageIcon />} label={profile.website} />
                    <Chip icon={<LocationOnOutlinedIcon />} label={profile.location} />
                  </Stack>
                  <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                    <Button
                      variant="contained"
                      color="primary"
                      size="large"
                      component="a"
                      href="/cv-leo-paul-ciron-2025.pdf"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {content.cta.download}
                    </Button>
                    <Button
                      variant="outlined"
                      color="secondary"
                      size="large"
                      component="a"
                      href={`mailto:${profile.email}`}
                    >
                      {content.cta.contact}
                    </Button>
                  </Stack>
                </Stack>
              </Box>
            </Grid>
            <Grid item xs={12} md={5}>
              <GlassCard>
                <CardContent sx={{ p: { xs: 2.5, md: 3 } }}>
                  <Stack spacing={3}>
                    <Typography variant="h4">{content.metricsTitle}</Typography>
                    <Divider />
                    <Stack spacing={2}>
                      {profile.metrics.map((metric) => (
                        <Box key={metric.label} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                          <Typography variant="subtitle1" color="text.secondary">
                            {metric.label}
                          </Typography>
                          <Typography variant="h5">{metric.value}</Typography>
                        </Box>
                      ))}
                    </Stack>
                    <Box
                      sx={{
                        borderRadius: 3,
                        p: 2,
                        backgroundColor: 'rgba(10, 132, 255, 0.08)',
                      }}
                    >
                      <Typography variant="subtitle2" sx={{ color: 'primary.dark' }}>
                        {content.cta.availability}
                      </Typography>
                    </Box>
                  </Stack>
                </CardContent>
              </GlassCard>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box sx={{ py: { xs: 6, md: 10 } }}>
        <Container>
          <SectionTitle title={content.sections.experience.title} subtitle={content.sections.experience.subtitle} />
          <AccentLine />
          <Stack spacing={3}>
            {profile.experiences.map((experience) => (
              <GlassCard key={`${experience.role}-${experience.company}`}>
                <CardContent sx={{ p: { xs: 2.5, md: 3.5 } }}>
                  <Stack spacing={2.5}>
                    <Stack
                      direction={{ xs: 'column', md: 'row' }}
                      spacing={2}
                      alignItems={{ md: 'center' }}
                      justifyContent="space-between"
                    >
                      <Box>
                        <Typography variant="h5">{experience.role}</Typography>
                        <Typography variant="subtitle1" color="text.secondary">
                          {experience.company} • {experience.location}
                        </Typography>
                      </Box>
                      <Chip
                        label={experience.period}
                        sx={{
                          alignSelf: { xs: 'flex-start', md: 'center' },
                          backgroundColor: 'rgba(10, 132, 255, 0.08)',
                        }}
                      />
                    </Stack>
                    <Stack spacing={1.5}>
                      {experience.bullets.map((bullet) => (
                        <Typography key={bullet} variant="body1">
                          {bullet}
                        </Typography>
                      ))}
                    </Stack>
                  </Stack>
                </CardContent>
              </GlassCard>
            ))}
          </Stack>
        </Container>
      </Box>

      <Box
        sx={{
          py: { xs: 6, md: 10 },
          background:
            mode === 'light'
              ? 'linear-gradient(180deg, rgba(245,245,247,0.9) 0%, rgba(245,245,247,0.6) 100%)'
              : 'linear-gradient(180deg, rgba(15,16,20,0.95) 0%, rgba(12,12,16,0.85) 100%)',
        }}
      >
        <Container>
          <SectionTitle title={content.sections.highlights.title} subtitle={content.sections.highlights.subtitle} />
          <AccentLine />
          <Grid container spacing={3}>
            {profile.highlights.map((highlight) => (
              <Grid item xs={12} md={4} key={highlight.title}>
                <Card sx={{ height: '100%' }}>
                  <CardContent>
                    <Stack spacing={2}>
                      <Typography variant="h5">{highlight.title}</Typography>
                      <Typography variant="body1" color="text.secondary">
                        {highlight.description}
                      </Typography>
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Box sx={{ py: { xs: 6, md: 10 } }}>
        <Container>
          <SectionTitle title={content.sections.projects.title} subtitle={content.sections.projects.subtitle} />
          <AccentLine />
          <Grid container spacing={3}>
            {profile.projects.map((project) => (
              <Grid item xs={12} md={4} key={project.title}>
                <Card sx={{ height: '100%' }}>
                  <Box
                    sx={{
                      height: 180,
                      background: `linear-gradient(140deg, ${project.accent} 0%, rgba(255,255,255,0.95) 100%)`,
                    }}
                  />
                  <CardContent>
                    <Stack spacing={2}>
                      <Stack direction="row" justifyContent="space-between" alignItems="center">
                        <Typography variant="h5">{project.title}</Typography>
                        <Typography variant="body2" color="text.secondary">
                          {project.year}
                        </Typography>
                      </Stack>
                      <Typography variant="body1" color="text.secondary">
                        {project.description}
                      </Typography>
                      <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                        {project.tags.map((tag) => (
                          <Chip key={tag} label={tag} size="small" />
                        ))}
                      </Stack>
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Box sx={{ py: { xs: 6, md: 10 } }}>
        <Container>
          <Grid container spacing={6}>
            <Grid item xs={12} md={7}>
              <SectionTitle title={content.sections.skills.title} subtitle={content.sections.skills.subtitle} />
              <AccentLine />
              <Stack direction="row" spacing={1.5} flexWrap="wrap" useFlexGap>
                {profile.skills.map((skill) => (
                  <Chip key={skill} label={skill} icon={skillIconMap[skill] ?? <CodeIcon />} />
                ))}
              </Stack>
            </Grid>
            <Grid item xs={12} md={5}>
              <SectionTitle title={content.sections.languages.title} subtitle={content.sections.languages.subtitle} />
              <AccentLine />
              <Stack spacing={1.5}>
                {profile.languages.map((language) => (
                  <Typography key={language} variant="body1">
                    {language}
                  </Typography>
                ))}
              </Stack>
              <Box sx={{ mt: 5 }}>
                <SectionTitle title={content.sections.passions.title} subtitle={content.sections.passions.subtitle} />
                <AccentLine />
                <Stack spacing={1.5}>
                  {profile.passions.map((passion) => (
                    <Typography key={passion} variant="body1">
                      {passion}
                    </Typography>
                  ))}
                </Stack>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box sx={{ py: { xs: 6, md: 10 }, backgroundColor: 'rgba(10, 132, 255, 0.06)' }}>
        <Container>
          <SectionTitle title={content.sections.education.title} subtitle={content.sections.education.subtitle} />
          <AccentLine />
          <Stack spacing={3}>
            {profile.education.map((edu) => (
              <GlassCard key={edu.diploma}>
                <CardContent sx={{ p: { xs: 2.5, md: 3.5 } }}>
                  <Stack spacing={2}>
                    <Stack direction={{ xs: 'column', md: 'row' }} spacing={2} justifyContent="space-between">
                      <Box>
                        <Typography variant="h5">{edu.diploma}</Typography>
                        <Typography variant="subtitle1" color="text.secondary">
                          {edu.school} • {edu.location}
                        </Typography>
                      </Box>
                      <Chip
                        label={edu.period}
                        sx={{
                          alignSelf: { xs: 'flex-start', md: 'center' },
                          backgroundColor: 'rgba(10, 132, 255, 0.08)',
                        }}
                      />
                    </Stack>
                    {edu.details ? (
                      <Stack spacing={0.5}>
                        {edu.details.map((detail) => (
                          <Typography variant="body2" color="text.secondary" key={detail}>
                            {detail}
                          </Typography>
                        ))}
                      </Stack>
                    ) : null}
                  </Stack>
                </CardContent>
              </GlassCard>
            ))}
          </Stack>
        </Container>
      </Box>

      <Box sx={{ py: { xs: 6, md: 10 } }}>
        <Container>
          <SectionTitle title={content.sections.contact.title} subtitle={content.sections.contact.subtitle} />
          <AccentLine />
          <Grid container spacing={6} alignItems="strech" justifyContent="center">
            <Grid>
              <GlassCard sx={{ height: '100%', width:'70vw', margin: { md: '0 auto' } }}>
                <CardContent
                  sx={{
                    p: { xs: 2.5, md: 3.5 },
                    display: 'flex',
                    flexDirection: 'column',
                    flex: 1,
                  }}
                >
                  <Stack spacing={2.5} component="form" onSubmit={handleSubmit} sx={{ flex: 1 }}>
                    <TextField
                      label={content.contactLabels.name}
                      variant="outlined"
                      fullWidth
                      required
                      value={formState.name}
                      onChange={(event) => handleFormChange('name', event.target.value)}
                    />
                    <TextField
                      label={content.contactLabels.email}
                      variant="outlined"
                      fullWidth
                      required
                      type="email"
                      value={formState.email}
                      onChange={(event) => handleFormChange('email', event.target.value)}
                    />
                    <TextField
                      label={content.contactLabels.message}
                      variant="outlined"
                      fullWidth
                      required
                      multiline
                      minRows={4}
                      value={formState.message}
                      onChange={(event) => handleFormChange('message', event.target.value)}
                    />
                    <Button type="submit" variant="contained" size="large" sx={{ mt: 'auto' }}>
                      {content.contactLabels.send}
                    </Button>
                  </Stack>
                </CardContent>
              </GlassCard>
            </Grid>
            <Grid item xs={12} md={4} lg={5}>
              <GlassCard sx={{ height: '100%' }}>
                <CardContent sx={{ p: { xs: 2.5, md: 3.5 } }}>
                  <Stack spacing={2.5}>
                    <Typography variant="h3">{profile.name}</Typography>
                    <Typography variant="subtitle1" color="text.secondary">
                      {content.about}
                    </Typography>
                    <Stack spacing={1.5}>
                      <Chip icon={<MailOutlineIcon />} label={profile.email} />
                      <Chip icon={<PhoneIphoneIcon />} label={profile.phone} />
                      <Chip icon={<LanguageIcon />} label={profile.website} />
                    </Stack>
                  </Stack>
                </CardContent>
              </GlassCard>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Snackbar
        open={snackOpen}
        onClose={() => setSnackOpen(false)}
        autoHideDuration={3500}
        message={content.contactLabels.success}
      />
      </Box>
    </ThemeProvider>
  )
}

export default App
