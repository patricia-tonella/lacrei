# 🏥 Lacrei Saúde - Plataforma de Saúde Inclusiva

Plataforma web desenvolvida para conectar pessoas LGBTQIAPN+ com profissionais de saúde qualificados, proporcionando experiências de cuidado seguras e inclusivas.

## **Funcionalidades Implementadas**

### **Interface e Design**

- **Header personalizado** com logo e navegação
- **Footer completo** com informações da empresa
- **Hero section** com foco na comunidade LGBTQIAPN+
- **Página "Quem Somos"** com missão e valores
- **Design responsivo** mobile-first
- **Identidade visual** fiel ao Marsha Design System

### **API Simulada (Mock)**

- **Dados JSON locais** para simular respostas de API
- **Hooks customizados** para gerenciar estado e loading
- **Simulação de delay** para parecer API real
- **Tratamento de erros** com retry automático
- **Estados de loading** com spinners animados
- **Busca e filtros** em tempo real

### **Componentes com API**

- **Lista de Profissionais** com busca/filtro

## **Tecnologias Utilizadas**

- **Next.js 15.2.4**
- **TypeScript**
- **Styled-Components**
- **React Hooks**
- **Vitest**
- **React Testing Library**

## **API Simulada **

### **Hooks Disponíveis**

- `useProfessionals()` - Gestão de profissionais

````

## **Como Executar**

### **Pré-requisitos**

- **Node.js** 18+ (recomendado: 20.x LTS)
- **npm** 9+ ou **yarn** 1.22+

### **Instalação**

```bash
# Clone o repositório
git clone <repository-url>
cd lacrei

# Instale as dependências
npm install

# Execute em desenvolvimento
npm run dev
````

## **Testes**

### **Configuração de Testes**

O projeto usa **Vitest** com **React Testing Library** para testes unitários e de integração.

### **Componentes Testados**

- Button, Header e Footer

![tests-passando](./public/tests.png)

## **Design System**

### **Justificativas Visuais e Técnicas**

#### **Cores e Identidade Visual**

- **Paleta LGBTQIAPN+**: Integrada no Hero e elementos visuais para demonstrar inclusão e representatividade

#### **Tipografia e Legibilidade**

- **Inter como fonte principal**: Excelente legibilidade em telas, especialmente para textos longos e interfaces
- **Poppins para títulos**: Moderna e amigável, transmite confiança e profissionalismo
- **Hierarquia clara**: 8 níveis de tamanho (xs a 6xl) para criar estrutura visual consistente
- **Line-height otimizado**: 1.5 para textos base, 1.2 para títulos, garantindo conforto de leitura

#### **Espaçamento e Layout**

- **Sistema baseado em 4px**: Garante consistência visual e facilita o desenvolvimento responsivo
- **Grid responsivo**: CSS Grid com `auto-fit` para adaptação automática a diferentes tamanhos de tela
- **Containers limitados**: Largura máxima de 1200px para otimizar leitura em telas grandes
- **Padding responsivo**: Adapta-se aos breakpoints para manter proporções adequadas

## 📱 **Responsividade**

### **Breakpoints**

- **sm**: 640px - Mobile grande
- **md**: 768px - Tablet
- **lg**: 1024px - Desktop pequeno
- **xl**: 1280px - Desktop grande
- **2xl**: 1536px - Desktop extra grande

### **Estratégia Mobile-First**

- Layout baseado em dispositivos móveis
- Progressive enhancement para telas maiores
- Touch-friendly para interações móveis
- Performance otimizada para conexões lentas

### **Grid Responsivo**

- CSS Grid com `auto-fit` e `minmax`
- Flexbox para layouts flexíveis
- Containers com largura máxima de 1200px
- Padding responsivo baseado em breakpoints

## **Acessibilidade**

### **Recursos Implementados**

- **HTML semântico** correto
- **Atributos ARIA** quando necessário
- **Contraste de cores** validado (WCAG AA)
- **Navegação por teclado** funcional
- **Screen readers** compatíveis
- **Skip links** para conteúdo principal
- **Focus visible** para navegação

### **Testes de Acessibilidade**

```bash
# Instalar Lighthouse CLI
npm install -g lighthouse

# Executar auditoria
lighthouse http://localhost:3000 --view
```

### **Métricas Alvo**

- **Lighthouse Accessibility**: ≥ 90
- **Contraste de cores**: ≥ 4.5:1
- **Navegação por teclado**: 100% funcional
- **Screen reader**: Compatível com NVDA/VoiceOver

## 🚀 **Deploy**

### **Vercel (Recomendado)**

```bash
# Instalar Vercel CLI
npm i -g vercel

# Login na conta
vercel login

# Deploy inicial
vercel

# Deploy de produção
vercel --prod

# Listar deployments
vercel ls

# Rollback para versão anterior
vercel rollback <deployment-id>
```

### **Configuração Automática**

- **Build Command**: `npm run build`
- **Output Directory**: `.next`
- **Install Command**: `npm install`
- **Framework Preset**: Next.js

### **Outras Plataformas**

- **Netlify**: Compatível com Next.js
- **Railway**: Deploy simples e rápido
- **AWS Amplify**: Para projetos empresariais
- **Docker**: Containerização disponível

## 📊 **Performance**

### **Otimizações Implementadas**

- **Lazy loading** de componentes
- **Bundle optimization** com Next.js
- **Image optimization** automática
- **Code splitting** automático
- **Tree shaking** para reduzir bundle
- **Font optimization** com display=swap
- **CSS optimization** com Styled-Components

### **Métricas Alvo**

- **Lighthouse Performance**: ≥ 80
- **Lighthouse Accessibility**: ≥ 90
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **First Input Delay**: < 100ms

## 🔄 **Rollback e Versionamento**

### **Estratégia de Rollback**

1. **Vercel**: Usar Preview Deployments
2. **Git**: Tags para releases estáveis
3. **Backup**: Dados mockados versionados
4. **Database**: Backup automático (quando implementado)

### **Comandos de Rollback**

```bash
# Voltar para versão anterior
git checkout <previous-tag>

# Deploy da versão anterior
vercel --prod

# Restaurar dados mockados
git checkout HEAD -- src/data/

# Rollback no Vercel
vercel rollback <deployment-id>
```

### **Versionamento**

```bash
# Criar tag para release
git tag -a v1.0.0 -m "Release v1.0.0"
git push origin v1.0.0

# Listar tags
git tag -l

# Voltar para tag específica
git checkout v1.0.0
```

Para dúvidas ou suporte técnico:

## 📄 **Licença**

Este projeto é propriedade da **Lacrei Saúde** e está sob licença proprietária.

**Todos os direitos reservados © 2024 Lacrei Saúde**

---

**Desenvolvido com ❤️ para a comunidade LGBTQIAPN+**

_Transformando o mundo através da inclusão clínica_
