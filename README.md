# DDD-tactical-modeling

# O que e o DDD?


# Vantagens e Desvantagens


# Entidades


# Value Objects


# Aggregate ou Agregados

Um agregado é um conjunto de objetos associado que tratamos como uma unidade para propósito de mudança de dados.

sendo um conjunto de entidades e objetos de valor, formando um grupo ou unidade logica.

# Domain Service


# Repositories

Um Repository em DDD (Domain-Driven Design) fornece uma interface para a interação com agregados, que são unidades de dados e regras de negócios que precisam ser tratadas como uma única unidade de consistência. Esse padrão de design promove a separação clara entre a lógica de negócios e a persistência de dados, resultando em um código mais limpo e modular, facilitando a manutenção e evolução do sistema.

Pontos importantes a considerar:

- Transações e consistência: Agregados relacionados devem ser manipulados dentro da mesma transação e mantidos no mesmo repositório para garantir a consistência nas operações e nos vínculos entre eles.

- Separação de contextos: E essencial separar a entidade das configurações de banco de dados, como anotações, vinculos desnecesarios e etc. Com isso, a lógica de infraestrutura deve ser mantida separada, permitindo que as entidades se concentrem exclusivamente nas regras de negócios.


# Domain Events ou Eventos de dominio

Um evento de domínio é utilizado em Domain-Driven Design (DDD) quando uma mudança significativa no domínio do software precisa ser comunicada e refletida em outras partes do sistema, especialmente em outros bounded contexts. Essa abordagem é amplamente discutida por Vaughn Vernon em seu livro sobre DDD, onde ele afirma: "Use um evento de domínio para capturar uma ocorrência de algo que aconteceu no domínio."

Um aspecto importante a ser observado é que um evento de domínio sempre representa algo que já aconteceu no passado. Exemplos comuns incluem eventos como "Pedido Realizado", "Usuário Criado" ou "Curso Completado". Esses eventos são disparados para notificar outras partes do sistema de que uma ação importante foi concluída, permitindo a coordenação entre diferentes bounded contexts ou serviços de forma desacoplada.