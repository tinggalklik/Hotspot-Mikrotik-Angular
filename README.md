# Hotspot-Mikrotik-Angular

Protótipo da página de login, usado pelo sistema http://www.mikrotik.com. Desenvolvido com Angular V1 - Fazendo uso de requisições
em arquivos JSON contendo as informações para a população da aplicação. Aplicação de aparencia simples e funcional.

# Aplicação totalmente customizavel atravez de arquivos JSON com as configurações.
  Arquivos
  
      "config/config-geral.json" - Configurações gerais como cores, textos, imagens e menu.
      "config/config-planos.json" - Configurações do planos, como preço, velocidade e nome.
      "config/config-locais.json" - Configurações dos locais que a empresa disponibiliza seu serviço.
      "config/config-contato.json" - Configurações do contato, como telefones. endereço e emails.
      
      
# Configuração das Cores
  Temas Disponiveis - Referencia: https://www.flatuicolors.com
      
      botao-branco
      fundo-branco  
      titulo-branco
      texto-branco
      
      botao-turquoise
      fundo-turquoise  
      titulo-turquoise
      texto-turquoise
      
      botao-emerald
      fundo-emerald  
      titulo-emerald
      texto-emerald
      
      botao-peter
      fundo-peter  
      titulo-peter
      texto-peter
      
      botao-amethyst
      fundo-amethyst  
      titulo-amethyst
      texto-amethyst
      
      botao-asphalt
      fundo-asphalt  
      titulo-asphalt
      texto-asphalt
      
      botao-sun
      fundo-sun  
      titulo-sun
      texto-sun
      
      botao-carrot
      fundo-carrot  
      titulo-carrot
      texto-carrot
      
      botao-auzarin
      fundo-auzarin  
      titulo-auzarin
      texto-auzarin
      
      botao-clouds
      fundo-clouds  
      titulo-clouds
      texto-clouds
      
      botao-concrete
      fundo-concrete  
      titulo-concrete
      texto-concrete
      
# Configurações de animação
  Transições disponíveis
      
      slide (Default)
      zoom

# Libs
      
      angular
      angular-css
      angular-ui-router
      angular-animate
      font-awesome
      anim-in-out
      animate.css

      
# IMPORTANTE
  
    Dependendo da localização dos arquivos no servidor, faça as alterações corretas no HEADER do login.html
    <base href="/PASTA/" /> - EX: http://login.com/PASTA/
    <base href="/" /> - http://login.com/
    
    E no arquivo .htacess
    
    <IfModule mod_rewrite.c>
    RewriteEngine on
    RewriteCond %{REQUEST_FILENAME} -s [OR]
    RewriteCond %{REQUEST_FILENAME} -l [OR]
    RewriteCond %{REQUEST_FILENAME} -d
    RewriteRule ^.*$ - [NC,L]
    RewriteRule ^(.*) /PASTA/login.html [NC,L] ou apenas /login.html
    </IfModule>
    #Alternate default index page
    DirectoryIndex login.html
    
  
      
      

   
