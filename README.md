# Guia Essencial do Corretor de Imóveis com IA - Landing Page

## 🚀 Deploy Automático - Guia Passo a Passo

### 1. Preparar o Repositório Git

#### Opção A: Criar novo repositório no GitHub
1. Acesse [GitHub.com](https://github.com) e faça login
2. Clique em "New repository"
3. Nome: `corretor-ia-landing`
4. Deixe como público
5. **NÃO** marque "Initialize with README"
6. Clique em "Create repository"

#### Opção B: Usar GitLab ou Bitbucket
- O processo é similar, apenas crie um repositório vazio

### 2. Configurar Git Local (Execute estes comandos no terminal)

```bash
# Inicializar repositório Git
git init
git 
# Adicionar todos os arquivos
git add .

# Fazer primeiro commit
git commit -m "Initial commit - Landing page corretor IA"
git
# Adicionar origem remota (substitua pela URL do seu repositório)
git remote add origin https://github.com/SEU_USUARIO/corretor-ia-landing.git

# Fazer push para o repositório
git push -u origin main
```

### 3. Configurar Deploy Automático no Netlify

#### 3.1. Acessar Netlify
1. Acesse [netlify.com](https://netlify.com)
2. Faça login ou crie uma conta

#### 3.2. Conectar Repositório
1. Clique em "New site from Git"
2. Escolha seu provedor (GitHub/GitLab/Bitbucket)
3. Autorize o Netlify a acessar seus repositórios
4. Selecione o repositório `corretor-ia-landing`

#### 3.3. Configurar Build
- **Branch to deploy:** `main`
- **Build command:** `npm run build`
- **Publish directory:** `dist`

#### 3.4. Variáveis de Ambiente (se necessário)
- Clique em "Advanced build settings"
- Adicione variáveis se precisar

#### 3.5. Deploy
- Clique em "Deploy site"
- Aguarde o primeiro build

### 4. Configurar Domínio Personalizado (Opcional)

#### 4.1. No painel do Netlify
1. Vá em "Domain settings"
2. Clique em "Add custom domain"
3. Digite seu domínio
4. Configure DNS conforme instruções

### 5. Workflow de Desenvolvimento

Agora, sempre que você quiser atualizar o site:

```bash
# Fazer suas alterações no código
# Depois executar:

git add .
git commit -m "Descrição das mudanças"
git push

# O Netlify automaticamente detectará e fará o deploy!
```

### 6. Recursos Automáticos Disponíveis

✅ **Deploy automático** a cada push
✅ **Preview de branches** para testar mudanças
✅ **Rollback fácil** para versões anteriores
✅ **SSL automático** (HTTPS)
✅ **CDN global** para velocidade
✅ **Notificações** de deploy por email

### 7. Comandos Úteis

```bash
# Ver status do repositório
git status

# Ver histórico de commits
git log --oneline

# Criar nova branch para testes
git checkout -b nova-feature

# Voltar para branch principal
git checkout main

# Fazer merge de uma branch
git merge nova-feature
```

### 8. Estrutura do Projeto

```
corretor-ia-landing/
├── src/
│   ├── components/
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── public/
├── dist/ (gerado automaticamente)
├── package.json
├── vite.config.ts
├── tailwind.config.js
└── README.md
```

### 9. Troubleshooting

#### Build falha?
- Verifique se todas as dependências estão no `package.json`
- Confirme se o comando `npm run build` funciona localmente

#### Deploy não atualiza?
- Verifique se o push foi feito corretamente
- Veja os logs de build no painel do Netlify

#### Erro 404 em rotas?
- Configure redirects no arquivo `_redirects` (se necessário)

### 10. Próximos Passos

1. **Configure analytics** (Google Analytics)
2. **Otimize SEO** (meta tags, sitemap)
3. **Configure formulários** (Netlify Forms)
4. **Adicione testes** automatizados
5. **Configure CI/CD** mais avançado

---

## 📞 Suporte

Se tiver dúvidas durante a configuração, me avise que te ajudo a resolver!

## 🎯 Benefícios do Deploy Automático

- ⏰ **Economia de tempo**: Sem deploy manual
- 🔒 **Mais seguro**: Menos chance de erro humano  
- 📈 **Profissional**: Workflow de desenvolvimento moderno
- 🚀 **Mais rápido**: Deploy em segundos após o push
- 📊 **Rastreável**: Histórico completo de mudanças