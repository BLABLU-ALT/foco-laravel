const CARDS=[{"id": 1, "question": "O que é Framework?", "answer": "É um conjunto de ferramentas, bibliotecas e padrões que fornece uma estrutura pronta para facilitar e acelerar o desenvolvimento de software.\n   Exemplo: Laravel."}, {"id": 2, "question": "O que é e para que serve o @csrf?", "answer": "É uma proteção contra ataques CSRF. O `@csrf` gera um token oculto no formulário e o Laravel verifica esse token quando a requisição é enviada. Se for inválido, a requisição é bloqueada.\n   Exemplo: `@csrf`"}, {"id": 3, "question": "Qual a vantagem de utilizar rotas nomeadas?", "answer": "Permitem chamar uma rota pelo nome em vez de depender diretamente da URL. Se a URL mudar, os locais que usam o nome da rota continuam funcionando.\n   Exemplo: `route('pedidos.index')`"}, {"id": 4, "question": "O que faz o @yield?", "answer": "Define no layout um espaço onde o conteúdo de outra view será inserido.\n   Exemplo: `@yield('content')`"}, {"id": 5, "question": "O que faz o @section?", "answer": "Define o conteúdo que será colocado em um `@yield` do layout.\n   Exemplo: `@section('content')`"}, {"id": 6, "question": "O que é Laravel Blade?", "answer": "É o motor de templates do Laravel usado para criar views HTML com recursos do PHP e diretivas do Laravel.\n   Exemplo: `{{ $pedido->cliente_nome }}`"}, {"id": 7, "question": "Qual comando sobe o front-end usando Tailwind/Vite?", "answer": "`npm run dev`\n   O backend pode ser iniciado com `php artisan serve`."}, {"id": 8, "question": "O que é MVC?", "answer": "MVC significa Model, View e Controller. O Model trabalha com os dados, a View mostra a interface e o Controller recebe a requisição e coordena a lógica.\n   Fluxo: Usuário → Rota → Controller → Model → Controller → View → Usuário."}, {"id": 9, "question": "O que significa `::`?", "answer": "É o operador de resolução de escopo do PHP. Permite acessar métodos estáticos, constantes ou propriedades estáticas através de uma classe.\n   Exemplo: `Route::get()`."}, {"id": 10, "question": "Qual a diferença entre Migration e Eloquent ORM?", "answer": "Migration define a estrutura do banco, como tabelas e colunas. Eloquent é o ORM usado para consultar e manipular os dados através de Models.\n    Exemplo: Migration cria a tabela `pedidos`; `Pedido::all()` busca os pedidos."}, {"id": 11, "question": "O que são atributos virtuais no Eloquent?", "answer": "São atributos calculados em tempo de execução que não precisam existir como uma coluna física no banco de dados.\n    Exemplo: um atributo `nome_completo` calculado pelo Model."}, {"id": 12, "question": "O que é Method Spoofing?", "answer": "É a técnica usada pelo Laravel para permitir PUT, PATCH e DELETE em formulários HTML, que nativamente trabalham com GET e POST.\n    Exemplo: `@method('DELETE')`"}, {"id": 13, "question": "O que é uma variável de Session Flash?", "answer": "É um dado temporário salvo na sessão, normalmente usado para mostrar mensagens apenas na próxima requisição.\n    Exemplo: `->with('success', 'Pedido cadastrado!')`"}, {"id": 14, "question": "Para que servem as classes FormRequest?", "answer": "Servem para separar a validação do Controller. Possuem `authorize()` para autorização e `rules()` para as regras de validação. A classe é injetada no método do Controller.\n    Exemplo: `public function store(PedidoRequest $request)`"}, {"id": 15, "question": "Diferencie CSS inline, interno e externo.", "answer": "Inline: fica diretamente na tag HTML.\n    Exemplo: `<p style=\"color:red\">`\n\nInterno: fica dentro de `<style>` na própria página.\n\nExterno: fica em um arquivo `.css` separado."}, {"id": 16, "question": "O que é npm?", "answer": "É o Node Package Manager, usado para instalar e gerenciar pacotes JavaScript.\n    Exemplo: `npm install`"}, {"id": 17, "question": "Diferença entre Bootstrap e Tailwind.", "answer": "Bootstrap possui componentes prontos e é rápido de utilizar, mas oferece menos liberdade de personalização. Tailwind utiliza classes utilitárias e permite maior personalização, mas exige mais conhecimento e normalmente utiliza Node/Vite."}, {"id": 18, "question": "Qual comando pode testar a comunicação com o banco?", "answer": "`php artisan migrate`\n    Ele tenta executar as migrations no banco. Se a conexão estiver errada, ocorrerá um erro."}, {"id": 19, "question": "O que é `$request`?", "answer": "É o objeto que contém os dados recebidos na requisição, como dados enviados por um formulário.\n    Exemplo: `$request->input('nome')`"}, {"id": 20, "question": "Diferencie Accessor e Mutator.", "answer": "Accessor modifica ou formata um valor quando ele é recuperado. Mutator modifica o valor antes de ele ser armazenado. Eles são definidos no Model.\n    Local correto: `app/Models`."}, {"id": 21, "question": "O que é Form Request Class?", "answer": "É uma classe especializada que valida e autoriza os dados da requisição antes da lógica principal do Controller.\n    Exemplo: `PedidoRequest`."}, {"id": 22, "question": "O que retorna `$request->validated()`?", "answer": "Retorna um array associativo contendo somente os dados que passaram pela validação.\n    Exemplo: `$dados = $request->validated();`\n\nSe o código estiver usando `Request $request` quando deveria usar uma classe criada com `make:request`, deve ser trocado pelo FormRequest correto.\nExemplo: `FormularioRequest $request`."}, {"id": 23, "question": "O que é Laravel Facade?", "answer": "É uma interface que fornece acesso simples aos serviços do Laravel através de chamadas semelhantes a métodos estáticos.\n    Exemplo: `Route::get()` ou `Http::get()`."}, {"id": 24, "question": "O que faz `var_dump()`?", "answer": "É uma função do PHP que mostra o tipo, tamanho e conteúdo de uma variável.\n    Exemplo: `var_dump($dados);`"}, {"id": 25, "question": "O que é AJAX?", "answer": "É uma técnica que permite ao navegador enviar e receber dados do servidor sem recarregar toda a página.\n    Exemplo: consultar o estoque automaticamente ao selecionar um produto."}, {"id": 26, "question": "O que significa o `true` em `xhr.open('GET', url, true)`?", "answer": "Significa que a requisição será assíncrona, permitindo que a página continue funcionando enquanto aguarda a resposta do servidor."}, {"id": 27, "question": "Qual comando cria um Controller?", "answer": "`php artisan make:controller PedidoController`"}, {"id": 28, "question": "O que faz `$fillable` e qual seu tipo?", "answer": "É um array que define quais atributos podem ser preenchidos em massa pelo Eloquent.\n    Exemplo: `protected $fillable = ['nome', 'preco'];`"}, {"id": 29, "question": "PHP é fracamente ou fortemente tipado?", "answer": "PHP possui tipagem dinâmica e é tradicionalmente considerado fracamente tipado. As variáveis não precisam ter o tipo declarado previamente e podem ocorrer conversões automáticas de tipos."}, {"id": 30, "question": "Por que um FormRequest pode retornar erro 403?", "answer": "Porque o método `authorize()` está retornando `false`.\n    Correção: `return true;`"}, {"id": 31, "question": "Principais diretórios e arquivos do Laravel.", "answer": "`app/Http/Controllers` → Controllers e lógica de controle.\n    `app/Models` → Models e acesso aos dados.\n    `database/migrations` → estrutura das tabelas.\n    `resources/views` → Views Blade.\n    `routes/web.php` → rotas web.\n    `config/database.php` → configurações de banco.\n    `.env` → configurações da aplicação e dados sensíveis."}, {"id": 32, "question": "O que significa `readyState === 4`?", "answer": "Significa que a requisição XMLHttpRequest terminou e a resposta foi completamente recebida. Depois disso é seguro acessar `responseText`."}, {"id": 33, "question": "O que o código Eloquent faz e como excluir em uma linha?", "answer": "O código realiza um UPDATE: busca o registro, altera o valor e salva novamente no banco.\n    Para excluir o registro de ID 20 em uma linha: `Aluno::destroy(20);`"}, {"id": 34, "question": "O que faz `$attributes->merge()` no Blade?", "answer": "Combina os atributos padrão de um componente Blade com os atributos adicionais enviados pela view que utiliza o componente.\n    Exemplo: `$attributes->merge(['class' => 'btn'])`"}];
const BANK=[
  {
    "id": 1,
    "question": "Qual definição descreve corretamente um framework no desenvolvimento de software?",
    "options": [
      "Um conjunto integrado de ferramentas, bibliotecas e padrões que fornece uma estrutura para desenvolver aplicações",
      "Um gerenciador usado exclusivamente para baixar dependências de uma linguagem",
      "Um padrão arquitetural que apenas separa dados, interface e controle",
      "Um ambiente de execução que converte todo código-fonte diretamente em linguagem de máquina"
    ],
    "correct_index": 0,
    "explanation": "Framework é uma estrutura pronta formada por ferramentas, bibliotecas e padrões; Laravel é um exemplo."
  },
  {
    "id": 2,
    "question": "Em um formulário Blade enviado por POST, qual é a função real da diretiva @csrf?",
    "options": [
      "Escapar automaticamente todos os campos para impedir qualquer injeção SQL",
      "Gerar um token oculto que o Laravel valida para bloquear requisições forjadas",
      "Criptografar o corpo inteiro da requisição antes de transmiti-lo ao servidor",
      "Verificar se o usuário possui uma função autorizada antes de processar o formulário"
    ],
    "correct_index": 1,
    "explanation": "@csrf insere um token no formulário, e o Laravel bloqueia a requisição caso esse token seja inválido."
  },
  {
    "id": 3,
    "question": "Uma aplicação usa route('pedidos.index') em várias views. Qual benefício ela obtém se a URL dessa rota mudar?",
    "options": [
      "O Laravel converte automaticamente a rota em uma requisição AJAX",
      "A rota passa a aceitar qualquer método HTTP sem alteração adicional",
      "As referências pelo nome continuam válidas, sem depender diretamente da URL",
      "A nova URL é gravada no cache do navegador e substitui todas as rotas antigas"
    ],
    "correct_index": 2,
    "explanation": "Rotas nomeadas desacoplam as chamadas da URL; a URL pode mudar sem quebrar usos de route() com o mesmo nome."
  },
  {
    "id": 4,
    "question": "Em um layout Blade, o que a diretiva @yield('content') estabelece?",
    "options": [
      "Uma variável global chamada content acessível em todos os controllers",
      "Um componente que será renderizado repetidamente para cada item de uma coleção",
      "Uma seção obrigatória cujo HTML é definido no próprio layout e não pode ser sobrescrito",
      "Um ponto do layout no qual outra view poderá inserir o conteúdo de uma seção"
    ],
    "correct_index": 3,
    "explanation": "@yield define no layout o espaço em que será inserido o conteúdo fornecido por outra view."
  },
  {
    "id": 5,
    "question": "Qual papel @section('content') desempenha em uma view Blade que estende um layout?",
    "options": [
      "Define o conteúdo destinado ao @yield('content') do layout",
      "Importa o conteúdo de um controller para dentro da view",
      "Cria uma seção HTML isolada que não participa da herança de templates",
      "Declara uma rota chamada content e vincula a view a ela"
    ],
    "correct_index": 0,
    "explanation": "@section define o bloco que preencherá o @yield correspondente no layout."
  },
  {
    "id": 6,
    "question": "O que é o Laravel Blade?",
    "options": [
      "Um ORM que converte registros do banco em objetos PHP",
      "O motor de templates do Laravel para produzir views HTML com PHP e diretivas próprias",
      "Um compilador de CSS utilitário executado pelo Vite",
      "Uma camada de roteamento responsável por ligar URLs aos controllers"
    ],
    "correct_index": 1,
    "explanation": "Blade é o motor de templates usado nas views e oferece expressões como {{ $variavel }} e diretivas do Laravel."
  },
  {
    "id": 7,
    "question": "Durante o desenvolvimento, qual comando inicia o processamento do front-end com Vite/Tailwind?",
    "options": [
      "npm install",
      "php artisan serve",
      "npm run dev",
      "php artisan make:frontend"
    ],
    "correct_index": 2,
    "explanation": "npm run dev inicia o ambiente de desenvolvimento do front-end; php artisan serve inicia o backend."
  },
  {
    "id": 8,
    "question": "Qual alternativa associa corretamente as responsabilidades no padrão MVC?",
    "options": [
      "Model exibe a interface; View consulta o banco; Controller define as migrations",
      "Model recebe rotas; View aplica regras de negócio; Controller armazena os dados",
      "Model renderiza HTML; View valida requisições; Controller representa tabelas",
      "Model trabalha com dados; View apresenta a interface; Controller recebe a requisição e coordena a lógica"
    ],
    "correct_index": 3,
    "explanation": "No MVC, o Model lida com dados, a View com a apresentação e o Controller coordena a requisição e a lógica."
  },
  {
    "id": 9,
    "question": "No código Route::get(), o que representa o operador :: do PHP?",
    "options": [
      "O operador de resolução de escopo, usado para acessar membros estáticos e constantes por meio da classe",
      "O operador de instância, usado para acessar somente métodos de um objeto criado com new",
      "O operador de namespace, usado exclusivamente para importar classes com use",
      "O operador de herança, usado para chamar apenas métodos protegidos da classe pai"
    ],
    "correct_index": 0,
    "explanation": ":: é o operador de resolução de escopo e permite acessar métodos e propriedades estáticos ou constantes de uma classe."
  },
  {
    "id": 10,
    "question": "Qual alternativa diferencia corretamente Migration de Eloquent ORM?",
    "options": [
      "Migration manipula registros pelos Models; Eloquent cria fisicamente tabelas e colunas",
      "Migration define a estrutura do banco; Eloquent consulta e manipula dados por meio de Models",
      "Migration valida formulários; Eloquent autoriza as requisições antes do Controller",
      "Migration renderiza as views; Eloquent registra as URLs da aplicação"
    ],
    "correct_index": 1,
    "explanation": "Migrations descrevem tabelas e colunas; o Eloquent é o ORM usado pelos Models para consultar e alterar registros."
  },
  {
    "id": 11,
    "question": "O que caracteriza um atributo virtual em um Model Eloquent?",
    "options": [
      "É uma coluna criada temporariamente por uma migration e apagada ao fim da requisição",
      "É um campo enviado pelo formulário que sempre precisa constar em $fillable",
      "É um valor calculado em tempo de execução que não precisa corresponder a uma coluna física",
      "É uma propriedade estática compartilhada por todas as instâncias do Model"
    ],
    "correct_index": 2,
    "explanation": "Atributos virtuais, como nome_completo calculado, podem existir no Model sem uma coluna correspondente no banco."
  },
  {
    "id": 12,
    "question": "Por que um formulário Blade pode usar @method('DELETE') junto de method='POST'?",
    "options": [
      "Para apagar o token CSRF assim que o formulário for enviado",
      "Para converter uma exclusão em uma consulta GET compatível com o navegador",
      "Para permitir que o banco execute DELETE sem passar pelo roteamento",
      "Para simular um método HTTP que formulários HTML não oferecem nativamente"
    ],
    "correct_index": 3,
    "explanation": "Method Spoofing permite representar PUT, PATCH ou DELETE em formulários HTML, que nativamente trabalham com GET e POST."
  },
  {
    "id": 13,
    "question": "Após cadastrar um pedido, o controller retorna com ->with('success', 'Pedido cadastrado!'). Que tipo de dado é esse?",
    "options": [
      "Um dado Session Flash, normalmente disponível apenas na próxima requisição",
      "Um cookie permanente que fica salvo até o usuário removê-lo",
      "Uma variável local acessível apenas antes do redirect ser executado",
      "Um campo virtual gravado automaticamente no Model Pedido"
    ],
    "correct_index": 0,
    "explanation": "Session Flash guarda temporariamente uma mensagem para que ela seja mostrada, em geral, na requisição seguinte."
  },
  {
    "id": 14,
    "question": "Qual descrição apresenta corretamente o uso de uma classe FormRequest no Laravel?",
    "options": [
      "Ela substitui o Model, usa fillable() para validar e é criada dentro da migration",
      "Ela separa validação do Controller, possui authorize() e rules() e pode ser injetada no método",
      "Ela renderiza erros diretamente, sem passar pelas regras nem pela autorização",
      "Ela registra rotas de formulário e deve ser instanciada manualmente dentro de cada view"
    ],
    "correct_index": 1,
    "explanation": "FormRequest centraliza autorização e validação em authorize() e rules(), sendo injetado no método do Controller."
  },
  {
    "id": 15,
    "question": "Qual alternativa classifica corretamente as três formas de aplicar CSS?",
    "options": [
      "Inline fica em arquivo .css; interno fica no atributo style; externo fica em uma tag <script>",
      "Inline fica em <style>; interno fica em arquivo .css; externo fica diretamente na tag HTML",
      "Inline fica no atributo style da tag; interno fica em <style> na página; externo fica em arquivo .css separado",
      "Inline e interno ficam obrigatoriamente no controller; externo fica na view Blade"
    ],
    "correct_index": 2,
    "explanation": "CSS inline usa o atributo style, CSS interno usa uma tag <style> e CSS externo fica em um arquivo separado."
  },
  {
    "id": 16,
    "question": "No ecossistema de front-end de um projeto Laravel, o que é npm?",
    "options": [
      "Um servidor PHP embutido que recebe as rotas web",
      "Um ORM para acessar pacotes armazenados no banco de dados",
      "Um compilador exclusivo do Tailwind que substitui o JavaScript",
      "O Node Package Manager, usado para instalar e gerenciar pacotes JavaScript"
    ],
    "correct_index": 3,
    "explanation": "npm é o gerenciador de pacotes do ecossistema Node/JavaScript; npm install instala as dependências."
  },
  {
    "id": 17,
    "question": "Qual comparação entre Bootstrap e Tailwind está correta?",
    "options": [
      "Bootstrap oferece componentes prontos e rapidez; Tailwind usa classes utilitárias e dá maior liberdade de personalização",
      "Bootstrap exige Node/Vite em qualquer uso; Tailwind funciona somente com componentes JavaScript prontos",
      "Bootstrap é um ORM visual; Tailwind é um motor de templates para substituir o Blade",
      "Bootstrap permite apenas CSS inline; Tailwind exige que todo estilo seja escrito em arquivos PHP"
    ],
    "correct_index": 0,
    "explanation": "Bootstrap prioriza componentes prontos, enquanto Tailwind trabalha com classes utilitárias e oferece mais personalização."
  },
  {
    "id": 18,
    "question": "Segundo o material, qual comando pode revelar um erro de conexão com o banco ao tentar aplicar a estrutura das tabelas?",
    "options": [
      "php artisan serve",
      "php artisan migrate",
      "npm run dev",
      "php artisan make:model"
    ],
    "correct_index": 1,
    "explanation": "php artisan migrate tenta executar as migrations; uma configuração de conexão incorreta gera erro."
  },
  {
    "id": 19,
    "question": "Em public function store(Request $request), o que o objeto $request representa?",
    "options": [
      "A resposta HTTP que será devolvida depois de salvar os dados",
      "A conexão ativa usada pelo Eloquent para executar consultas SQL",
      "A requisição recebida, incluindo dados como os campos enviados por formulário",
      "A rota nomeada responsável por localizar o método store"
    ],
    "correct_index": 2,
    "explanation": "$request reúne os dados recebidos na requisição, acessíveis, por exemplo, com $request->input('nome')."
  },
  {
    "id": 20,
    "question": "Qual afirmação diferencia corretamente Accessor e Mutator no Eloquent?",
    "options": [
      "Accessor altera antes de gravar e fica na migration; Mutator formata ao recuperar e fica na view",
      "Accessor autoriza a leitura; Mutator valida o formulário; ambos ficam no Controller",
      "Accessor e Mutator alteram exclusivamente colunas físicas por comandos SQL no arquivo .env",
      "Accessor transforma o valor ao recuperá-lo; Mutator transforma o valor antes de armazená-lo; ambos ficam no Model"
    ],
    "correct_index": 3,
    "explanation": "Accessor atua na leitura e Mutator antes da gravação; eles são definidos no Model, em app/Models."
  },
  {
    "id": 21,
    "question": "O que melhor define uma Form Request Class?",
    "options": [
      "Uma classe especializada que autoriza e valida os dados antes da lógica principal do Controller",
      "Uma classe Eloquent que cria automaticamente as colunas de um formulário no banco",
      "Uma classe Blade que converte cada campo HTML em uma rota nomeada",
      "Uma classe JavaScript que envia qualquer formulário de modo assíncrono"
    ],
    "correct_index": 0,
    "explanation": "Uma Form Request Class, como PedidoRequest, trata autorização e validação antes da lógica do Controller."
  },
  {
    "id": 22,
    "question": "Em um método que recebeu PedidoRequest $request, o que $request->validated() devolve?",
    "options": [
      "Todos os dados recebidos, inclusive os campos sem regras de validação",
      "Um array associativo somente com os dados que passaram pela validação",
      "Um booleano que indica apenas se authorize() retornou true",
      "Uma instância do Model já preenchida e persistida no banco"
    ],
    "correct_index": 1,
    "explanation": "validated() retorna apenas os dados aprovados pelas regras do FormRequest, organizados em um array associativo."
  },
  {
    "id": 23,
    "question": "Por que chamadas como Route::get() e Http::get() são exemplos de Facades no Laravel?",
    "options": [
      "Porque criam instâncias reais com new e ignoram o contêiner de serviços",
      "Porque transformam qualquer método de instância em uma constante de classe",
      "Porque oferecem uma interface simples, semelhante a métodos estáticos, para acessar serviços do Laravel",
      "Porque são templates Blade que ocultam automaticamente todo código PHP da aplicação"
    ],
    "correct_index": 2,
    "explanation": "Facades fornecem acesso simples aos serviços do Laravel por meio de uma sintaxe semelhante a chamadas estáticas."
  },
  {
    "id": 24,
    "question": "Ao executar var_dump($dados), quais informações o PHP apresenta?",
    "options": [
      "Somente o valor convertido obrigatoriamente para texto",
      "Somente a classe e os métodos públicos da variável",
      "Uma versão JSON do valor, sem informar seu tipo",
      "O tipo, o tamanho quando aplicável e o conteúdo da variável"
    ],
    "correct_index": 3,
    "explanation": "var_dump() é uma ferramenta de inspeção que mostra tipo, tamanho e conteúdo de uma variável."
  },
  {
    "id": 25,
    "question": "Qual cenário descreve corretamente o uso de AJAX?",
    "options": [
      "O navegador consulta o servidor e atualiza parte da interface sem recarregar a página inteira",
      "O servidor recompila todo o CSS antes de permitir cada mudança em um formulário",
      "A aplicação recarrega obrigatoriamente o documento completo a cada dado recebido",
      "O banco envia HTML diretamente à view sem uma requisição do navegador"
    ],
    "correct_index": 0,
    "explanation": "AJAX permite trocar dados com o servidor e atualizar a página sem um recarregamento completo."
  },
  {
    "id": 26,
    "question": "Na chamada xhr.open('GET', url, true), o terceiro argumento true determina que:",
    "options": [
      "A resposta será aceita apenas se contiver o valor booleano true",
      "A requisição será assíncrona, e a página poderá continuar funcionando durante a espera",
      "O método GET será convertido em POST antes de sair do navegador",
      "O navegador ignorará o status HTTP e tratará qualquer resposta como sucesso"
    ],
    "correct_index": 1,
    "explanation": "true configura a XMLHttpRequest como assíncrona, evitando bloquear a página enquanto a resposta não chega."
  },
  {
    "id": 27,
    "question": "Qual comando Artisan cria um controller chamado PedidoController?",
    "options": [
      "php artisan create:controller PedidoController",
      "php artisan make:request PedidoController",
      "php artisan make:controller PedidoController",
      "php artisan controller:generate PedidoController"
    ],
    "correct_index": 2,
    "explanation": "O comando correto é php artisan make:controller PedidoController."
  },
  {
    "id": 28,
    "question": "Em um Model Eloquent, o que protected $fillable = ['nome', 'preco']; define?",
    "options": [
      "Uma string com os campos que nunca podem ser lidos do banco",
      "Um objeto com as colunas que a migration deve excluir",
      "Uma lista de atributos calculados que existem somente em tempo de execução",
      "Um array de atributos permitidos em operações de preenchimento em massa"
    ],
    "correct_index": 3,
    "explanation": "$fillable é um array que permite explicitamente determinados atributos no preenchimento em massa do Eloquent."
  },
  {
    "id": 29,
    "question": "Como a tipagem do PHP é tradicionalmente caracterizada?",
    "options": [
      "Dinâmica e fracamente tipada, permitindo variáveis sem tipo prévio e certas conversões automáticas",
      "Estática e fortemente tipada, exigindo tipo imutável em toda declaração de variável",
      "Sem tipagem, pois o PHP não identifica nem armazena o tipo dos valores",
      "Exclusivamente inferida em compilação, sem qualquer conversão entre tipos"
    ],
    "correct_index": 0,
    "explanation": "PHP possui tipagem dinâmica e é tradicionalmente considerado fracamente tipado, com conversões automáticas em alguns contextos."
  },
  {
    "id": 30,
    "question": "Um FormRequest válido nas regras retorna HTTP 403 antes de o controller executar. Qual causa é a mais provável?",
    "options": [
      "O método rules() retornou um array vazio, o que sempre produz 403",
      "O método authorize() retornou false; para autorizar, ele deve retornar true",
      "O método validated() foi chamado depois do Model, o que invalida o token CSRF",
      "O atributo $fillable não contém o nome da classe FormRequest"
    ],
    "correct_index": 1,
    "explanation": "Quando authorize() retorna false, o FormRequest nega a autorização e o Laravel responde com 403."
  },
  {
    "id": 31,
    "question": "Qual conjunto associa corretamente partes do Laravel aos seus locais padrão?",
    "options": [
      "Controllers em resources/views; Models em routes; migrations em app/Http",
      "Controllers em app/Models; Models em database/migrations; views em config",
      "Controllers em app/Http/Controllers; Models em app/Models; migrations em database/migrations; views em resources/views",
      "Controllers em routes/web.php; Models em .env; migrations em resources/views; views em app/Http"
    ],
    "correct_index": 2,
    "explanation": "Esses são os diretórios padrão; rotas web ficam em routes/web.php e configurações do banco também usam config/database.php e .env."
  },
  {
    "id": 32,
    "question": "Em uma XMLHttpRequest, o que pode ser concluído quando readyState === 4?",
    "options": [
      "A requisição acabou de ser criada, mas open() ainda não foi chamado",
      "Os cabeçalhos começaram a chegar, mas o corpo ainda não pode ser acessado",
      "A conexão foi necessariamente bem-sucedida e o status HTTP é sempre 200",
      "A operação terminou e a resposta foi recebida por completo, embora o status ainda deva ser verificado"
    ],
    "correct_index": 3,
    "explanation": "readyState 4 indica conclusão e resposta recebida; isso não garante sucesso, por isso o status HTTP deve ser analisado."
  },
  {
    "id": 33,
    "question": "Um código usa find(), altera um atributo e chama save(). O que ele faz, e como excluir diretamente o registro de ID 20?",
    "options": [
      "Ele realiza um UPDATE; a exclusão em uma linha pode ser feita com Aluno::destroy(20);",
      "Ele realiza um INSERT; a exclusão correta é Aluno::find(20);",
      "Ele realiza um SELECT sem persistência; a exclusão é Aluno::delete(20);",
      "Ele recria a tabela; a exclusão é Aluno::drop(20);"
    ],
    "correct_index": 0,
    "explanation": "Alterar um Model existente e chamar save() gera um UPDATE; Aluno::destroy(20) exclui o registro em uma linha."
  },
  {
    "id": 34,
    "question": "Em um componente Blade, qual é o efeito de $attributes->merge(['class' => 'btn'])?",
    "options": [
      "Substituir todos os atributos recebidos e impedir classes adicionais na chamada do componente",
      "Combinar os atributos padrão do componente com os atributos adicionais enviados pela view",
      "Mesclar os dados validados do FormRequest diretamente com as colunas do Model",
      "Adicionar a classe btn ao arquivo CSS externo durante a compilação do Vite"
    ],
    "correct_index": 1,
    "explanation": "merge() combina os atributos padrão do componente com os atributos fornecidos por quem o utiliza."
  }
]
;