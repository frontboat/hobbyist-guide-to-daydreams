import { defineConfig } from 'vocs'

export default defineConfig({
  theme: {
    colorScheme: 'dark',
  },
  logoUrl: '/daydreams.svg',
  sidebar: [
    {
      text: 'Getting Started',
      link: '/getting-started',
    },
    {
      text: 'Core API',
      items: [
        { text: 'dreams.ts', link: '/dreams' },
        { text: 'context.ts', link: '/context' },
        { text: 'utils.ts', link: '/utils' },
        { text: 'engine.ts', link: '/engine' },
        { text: 'tasks.ts', link: '/tasks' },
        { text: 'handlers.ts', link: '/handlers' },
        { text: 'types.ts', link: '/types' },
        { text: 'container.ts', link: '/container' },
        { text: 'formatters.ts', link: '/formatters' },
        { text: 'xml.ts', link: '/xml' },
        { text: 'configs.ts', link: '/configs' },
        { text: 'http.ts', link: '/http' },
        { text: 'jsonpath.ts', link: '/jsonpath' },
        { text: 'serviceProvider.ts', link: '/serviceProvider' },
        { text: 'prompt.ts', link: '/prompt' },
        { text: 'prompts/main.ts', link: '/prompts-main' },
        { text: 'logger.ts', link: '/logger' },
        { text: 'streaming.ts', link: '/streaming' },
        { text: 'memory', link: '/memory' },
        { text: 'providers/api.ts', link: '/providers-api' },
      ],
    },
  ],
})
