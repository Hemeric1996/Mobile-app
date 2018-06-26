var etapes = [
    {
        title: "Product/market fit",
        info: "Êtes-vous en train de développer un produit que les gens veulent utiliser?",
        description:"Il désigne l’adéquation parfaite entre le produit et son marché. ",
        response: [
            [
                {
                    niveau: 1,
                    text: "Vous pensez que les gens voudront utiliser votre produit",
                    recommandation: "<li style='box-sizing: border-box; padding: 0; list-style: none; margin: 0px;'> R1: Si le produit n’existe pas encore il vous sera difficile de savoir si les utilisateurs en exprime le besoin. Nous vous suggérons de réaliser un prototype afin de le tester. Car,la  chance de réussite de votre produit est faible. </li><li style='box-sizing: border-box; padding: 0; list-style: none; margin: 0px;'> R2: C’est très bien d’être optimiste. Mais vous feriez mieux de tester le produit. De plus, parler du produit autour de vous même si il n’est pas encore disponible pour recueillir l’avis de vos proches. Allez vers des personnes neutre qui feront une analyse vraiment critique du produit et vous aideront à relever ses faiblesses.</li>"
                },
                {
                    niveau: 2,
                    text: "Vous avez parlé à de potentiels clients, et ils ont dit vouloir tester le produit une fois prêt pour utilisation",
                    recommandation: "<li style='box-sizing: border-box; padding: 0; list-style: none; margin: 0px;'> R1: Votre priorité à l'instant doit être de rendre disponible le produit aux utilisateurs. Penser également à recueillir leur avis et observation pour améliorer le produit. </li><li style='box-sizing: border-box; padding: 0; list-style: none; margin: 0px;'> R2:  Penser à vite réaliser le produit pour le faire tester et recueillir les avis de vos potentiels clients. Les faire attendre sur ce coup laissera voir un manque de motivation de votre part.</li>"
                },
                {
                    niveau: 2,
                    text: "Vous avez des lettres d’intention (personnes ayant envoyé par écrit leur intention d’utiliser votre produit une fois prêt pour utilisation)",
                    recommandation: "<li style='box-sizing: border-box; padding: 0; list-style: none; margin: 0px;'> R1: Le compte à rebours est lancé. Dépêchez-vous de faire quelques échantillons du produit que vous ferez consommer à vos clients. Soyez à l’écoute. C’est leurs observations qui vous permettront d’améliorer votre produit. Alors, n’hésitez plus.</li>"
                },
                {
                    niveau: 3,
                    text: "Vous avez des clients non payant qui utilisent une version pilote du produit",
                    recommandation: "<li style='box-sizing: border-box; padding: 0; list-style: none; margin: 0px;'> R1: Amener vos clients actuelles à payer pour utiliser plus de fonctionnalités. </li><li style='box-sizing: border-box; padding: 0; list-style: none; margin: 0px;'> R2: C’est bien que des clients utilisent déjà votre produit encore faudrait-il qu’il paie. C’est le moment de passer à l’étape suivante. Amener vos clients actuels à payer pour utiliser plus de fonctionnalités. Vous pourriez par exemple, considérer les informations que vous avez sur chacun de vos utilsateurs en rapport avec le produit pour savoir avec précision les fonctionnalités de votre produit qu'ils utilisent le plus. Avec ces informations, vous pourriez leur envoyer des messages personnalisés pour les inciter à utiliser des fonctionnalités payantes et qui leur seront utiles.</li>"
                },
                {
                    niveau: 4,
                    text: "Vous avez des clients payants qui utilisent une version pilote du produit",
                    recommandation: "<li style='box-sizing: border-box; padding: 0; list-style: none; margin: 0px;'> R1: Super vous êtes sur la bonne voie. Fidéliser vos clients et continuer par avoir plus de clients payant. </li><li style='box-sizing: border-box; padding: 0; list-style: none; margin: 0px;'> R2: Bravo! Vos clients aiment vos produits. Penser à fidéliser les clients existant et à en acquérir de nouveaux qui paieront.</li>"
                },
                {
                    niveau: 5,
                    text: "Vous avez des contrats payés. De préférence prépayés",
                    recommandation: "<li style='box-sizing: border-box; padding: 0; list-style: none; margin: 0px;'> R1: Wahoo votre produit à un fort taux de succès. Maintenez le cap et surtout pensez à offrir aux clients des bonus. </li><li style='box-sizing: border-box; padding: 0; list-style: none; margin: 0px;'> R2: Félicitation! Votre produit à un fort taux de succès. Maintenez le cap et surtout penser à offrir aux clients des bonus</li>"
                },
            ],
            [
                {
                    niveau: 1,
                    text: "Vous pensez que les gens voudront utiliser votre produit",
                    recommandation: "<li style='box-sizing: border-box; padding: 0; list-style: none; margin: 0px;'> C’est très bien d’être optimiste. Mais vous feriez mieux de tester le produit. Parler du produit autour de vous même si il n’est pas encore disponible pour recueillir l’avis de vos proches. Allez vers des personnes neutre qui feront une analyse vraiment critique du produit et vous aideront à relever ses faiblesses</li>"
                },
                {
                    niveau: 2,
                    text: "La plupart de vos utilisateurs sont de votre réseau immédiat. (amis, membres de votre famille, etc…)",
                    recommandation: "<li style='box-sizing: border-box; padding: 0; list-style: none; margin: 0px;'> Commencer à analyser le comportement (ce qu’ils font, d’où ils viennent, combien il gagne en moyenne et leur habitude de consommation) de vos nouveaux utilisateurs non affiliés. Ainsi vous pourriez envisager une campagne d’acquisition sur la base des analyses faites pour acquérir de nouveau clients</li>"
                },
                {
                    niveau: 3,
                    text: "Vous avez des premiers utilisateurs non affilies, mais vous peinez à en acquérir d’autre",
                    recommandation: "<li style='box-sizing: border-box; padding: 0; list-style: none; margin: 0px;'>Les utilisateurs marquent un intérêt pour votre produit. Pensez à faire des campagnes pour augmenter le nombre d’utilisateurs.</li>"
                },
                {
                    niveau: 4,
                    text: "Votre base d’utilisateurs croit organiquement à un rythme modéré",
                    recommandation: "<li style='box-sizing: border-box; padding: 0; list-style: none; margin: 0px;'>Les utilisateurs marquent un intérêt pour votre produit. Pensez à faire des campagnes pour augmenter le nombre d’utilisateurs.</li>"
                },
                {
                    niveau: 4,
                    text: "Votre base d’utilisateurs se développe rapidement avec un cout d’acquisition modéré",
                    recommandation: "<li style='box-sizing: border-box; padding: 0; list-style: none; margin: 0px;'>Bravo! Réfléchissez à rendre nul le coût d’acquisition de vos utilisateurs.</li>"
                },
                {
                    niveau: 5,
                    text: "Votre base d’utilisateurs est en train d’exploser grâce aux recommandations et au bouche à oreille",
                    recommandation: "<li style='box-sizing: border-box; padding: 0; list-style: none; margin: 0px;'> Félicitation! Vos utilisateurs sont satisfaits de votre produit. N’hésitez pas à demander à vos clients ce qu’ils aiment chez vous. Offrez-leur toujours ce qu’il y a de meilleur. Faites les intervenir dans l’élaboration de vos nouveaux produits.</li>"
                },
            ]
        ]
    },
    {
        title: "Qualité du produit",
        info: "Avez-vous la capacité d’améliorer ou de créer un produit de bonne qualité ?",
        description: "La qualité d’un produit peut être définie en fonction de ses caractéristiques objectives et de sa capacité à remplir parfaitement ses fonctions. On peut distinguer quatre dimensions de la qualité objective : la fiabilité, la durabilité, le respect des normes et la performance.",
        response: [
            {
                niveau: 1,
                text: "Vous êtes sûr de pouvoir créer un bon produit, mais ceci constitue votre premier essai",
                recommandation: "<li style='box-sizing: border-box; padding: 0; list-style: none; margin: 0px;'> Réaliser le produit pour qu’on puisse juger de la qualité.</li>"
            },
            {
                niveau: 1,
                text: "Vous prévoyez externaliser le développement de votre produit",
                recommandation: "<li style='box-sizing: border-box; padding: 0; list-style: none; margin: 0px;'> Réaliser un prototype afin qu’on analyse la qualité.</li>"
            },
            {
                niveau: 1,
                text: "Vous avez un prototype, mais il est vraiment médiocre",
                recommandation: "<li style='box-sizing: border-box; padding: 0; list-style: none; margin: 0px;'> R1: Vos avez besoin de faire des recherches en vue d’améliorer la qualité de votre produit (d’une formation en ...) </li><li style='box-sizing: border-box; padding: 0; list-style: none; margin: 0px;'> R2: Penser à trouver de meilleurs fournisseurs pour les matières premières entrant dans la fabrication de votre produit. <li style='box-sizing: border-box; padding: 0; list-style: none; margin: 0px;'></li> R3: Identifier les raisons pour lesquelles le produit est médiocre et trouver des solutions pour réaliser un produit meilleur.</li>"
            },
            {
                niveau: 2,
                text: "Vous avez déjà fait partie d’une équipe ayant créé d’excellents produits.",
                recommandation: "<li style='box-sizing: border-box; padding: 0; list-style: none; margin: 0px;'> Capitalisez vos expériences pour avoir un bon produit. Mettez vos compétences à disposition des autres.</li>"
            },
            {
                niveau: 3,
                text: "Vous avez déjà supervisé une équipe ayant créé d’excellents produits.",
                recommandation: "<li style='box-sizing: border-box; padding: 0; list-style: none; margin: 0px;'> R1: Vous êtes sur la bonne voie. Profiter de votre expérience de management. </li><li style='box-sizing: border-box; padding: 0; list-style: none; margin: 0px;'> R2: Intégrer dans votre équipe des personnes que vous avez a eu à superviser et qui vous seront utile dans l’amélioration de la qualité du produit.</li>"
            },
            {
                niveau: 4,
                text: "Vous avez un prototype, et il est bon.",
                recommandation: "<li style='box-sizing: border-box; padding: 0; list-style: none; margin: 0px;'> Super, continuer et persévérer dans votre travail.</li>"
            },
            {
                niveau: 5,
                text: "Vous avez un produit viable, entièrement fonctionnel et il est exceptionnel.",
                recommandation: "<li style='box-sizing: border-box; padding: 0; list-style: none; margin: 0px;'> Excellent</li>"
            },
        ]
    },
    {
        title: "Equipe",
        info: "Quelles sont les cinq (5) compétences clés nécessaires au développement de votre produit?(exemples : ventes, expérience d’utilisateurs etc…) et qui est ce qui apporte actuellement cette compétence à l’équipe?",
        description: false,
        response: []
    },
    {
        title: "Recrutement",
        info: "Êtes-vous en mesure de recruter des talents pour atteindre vos objectifs de croissance?",
        description:"C’est l'ensemble des actions mises en œuvre pour trouver un candidat correspondant aux besoins et compétences requises à un poste de travail donné, dans une organisation donnée.",
        response: [
            {
                niveau: 1,
                text: "Vous n’avez jamais recruté auparavant",
                recommandation: "<li style='box-sizing: border-box; padding: 0; list-style: none; margin: 0px;'> Ce n’est pas grave. Faites la liste des compétences dont vous avez besoin. Demander de l’aide à des personnes ressources qui pourront vous aidez dans cette tâche.</li>"
            },
            {
                niveau: 1,
                text: "Personne ne veut travailler avec vous.",
                recommandation: "<li style='box-sizing: border-box; padding: 0; list-style: none; margin: 0px;'> R1: Inquiétant, pas de panique. Vous devez revoir votre caractère. </li><li style='box-sizing: border-box; padding: 0; list-style: none; margin: 0px;'> R2: Oups, ceci est certainement un problème lié à vous. Essayez d’identifier ce qui empêche les gens de travailler avec vous et corriger cela. N’oubliez pas que vous ne pouvez pas tout faire seul. Le projet a besoin de vous et d’autres personnes pour que cela soit un succès.</li>"
            },
            {
                niveau: 2,
                text: "Vous avez quelques expériences de recrutement.",
                recommandation: "<li style='box-sizing: border-box; padding: 0; list-style: none; margin: 0px;'> R1:Servez-vous de votre expérience de recruteur pour choisir vos collaborateurs ou employés. </li><li style='box-sizing: border-box; padding: 0; list-style: none; margin: 0px;'> R2: C’est déjà bien.Faites des recherches complémentaires pour savoir comment bien conduire un recrutement et passez l’annonce.</li>"
            },
            {
                niveau: 3,
                text: "Vous avez déjà eu à recruter",
                recommandation: "<li style='box-sizing: border-box; padding: 0; list-style: none; margin: 0px;'> R1: Bien. Commencer à recruter. </li><li style='box-sizing: border-box; padding: 0; list-style: none; margin: 0px;'> R2: C’est bien. L’organisation des recrutements vous connait. Mettez l’accent sur les compétences le savoir vivre et la détermination de vos futurs employés avant de les prendre dans votre équipe. Documentez-vous sur comment gérer une équipe pour le succès.</li>"
            },
            {
                niveau: 4,
                text: "Vous avez dans le passé réuni des équipes vraiment formidables.",
                recommandation: "<li style='box-sizing: border-box; padding: 0; list-style: none; margin: 0px;'> R1: Faites de même pour votre projet. </li><li style='box-sizing: border-box; padding: 0; list-style: none; margin: 0px;'> R2:  Bravo.Tout ceci est dans votre avantage."
            },
            {
                niveau: 4,
                text: "Vous avez déjà au sein de votre équipe des talents reconnus dans votre écosystème.",
                recommandation: "<li style='box-sizing: border-box; padding: 0; list-style: none; margin: 0px;'> R1: Vous êtes sur la bonne voie. </li><li style='box-sizing: border-box; padding: 0; list-style: none; margin: 0px;'> R2: C’est formidable.Mettez-vous au travail et avancer.</li>"
            },
            {
                niveau: 5,
                text: "Vous êtes déjà les meilleurs talents de la place et les autres se battent pour vous rejoindre.",
                recommandation: "<li style='box-sizing: border-box; padding: 0; list-style: none; margin: 0px;'> R1: Ne craignez rien. Avancer seulement. </li><li style='box-sizing: border-box; padding: 0; list-style: none; margin: 0px;'> R2: Quoi de plus satisfaisant! Votre équipe vous mènera au succès. Sachez la manager.</li>"
            },
        ]
    },
    {
        title: "Vente",
        info: "Êtes-vous capable de vendre avec succès votre produit?",
        description:"La vente c’est le processus par lequel vous amenez un client à acheter votre produit.",
        response: [
            {
                niveau: 1,
                text: "Personne au sein de votre équipe n’a d’expérience dans la vente.",
                recommandation: "<li style='box-sizing: border-box; padding: 0; list-style: none; margin: 0px;'> R1: Il vous faut une formation en marketing. Sur le thème: comment vendre un produit.</li><li style='box-sizing: border-box; padding: 0; list-style: none; margin: 0px;'> R2: Hum! C’est embarrassant. Identifier dans votre équipe celui qui a des aptitudes de vendeur et faites le former au domaine de la vente ou faite appel à une personne extérieure qui va s’en charger.</li>"
            },
            {
                niveau: 2,
                text: "Vous n’avez pas assez d’expérience de vente dans le domaine de votre produit.",
                recommandation: "<li style='box-sizing: border-box; padding: 0; list-style: none; margin: 0px;'> Ce n’est pas grave. Essayez de mettre en pratique les compétences que vous avez acquises dans vos expériences précédentes. Faites-vous former ou documentez-vous sur les méthodes utilisées pour la  vente dans votre domaine actuel.</li>"
            },
            {
                niveau: 3,
                text: "Vous vendez votre produit avec succès, mais en dessous des prix du marché et/ou les ventes prennent beaucoup plus de temps que prévu.",
                recommandation: "<li style='box-sizing: border-box; padding: 0; list-style: none; margin: 0px;'> R1: Faire l’analyse des prix sur le marché avant de fixer le prix. Il vous faut suivre une formation en marketing opérationnel.</li><li style='box-sizing: border-box; padding: 0; list-style: none; margin: 0px;'> R2: Arrivez-vous à faire des bénéfices? Sinon, vous risquez de faire faillite sous peu. Il serait intéressant que vous fassiez une analyse  des prix sur le marché. Cependant, si vos ventes évoluent faiblement, pensez à suivre une formation sur comment optimisez vos ventes.</li>"
            },
            {
                niveau: 3,
                text: "Vous avez réalisé beaucoup d’expérience de ventes dans le domaine de votre produit",
                recommandation: "<li style='box-sizing: border-box; padding: 0; list-style: none; margin: 0px;'> Eh bien, c’est formidable. Vous savez quoi faire. Pensez à mettre par écrit la stratégie que vous utiliserez pour propulser vos ventes.</li>"
            },
            {
                niveau: 3,
                text: "Vous avez créé et diriger une équipe de vente dans le passé.",
                recommandation: "<li style='box-sizing: border-box; padding: 0; list-style: none; margin: 0px;'> R1: Il vous faut fixer des objectifs afin de commencez à travailler </li><li style='box-sizing: border-box; padding: 0; list-style: none; margin: 0px;'> R2: Vous connaissez les clés de succès de la vente. Elaborer votre stratégie de vente en adéquation avec votre produit actuel et foncer.</li>"
            },
            {
                niveau: 4,
                text: "Vous avez une équipe de vente forte et expérimenté.",
                recommandation: "<li style='box-sizing: border-box; padding: 0; list-style: none; margin: 0px;'> R1: Super utiliser vos expériences et foncez. R1: Rien à dire. Vous avez toutes les armes de la vente pour réussir. Veuillez à faire une bonne analyse des retours de vos vendeurs pour améliorer votre service aux clients.</li>"
            },
            {
                niveau: 5,
                text: "Vous vendez avec succès votre produit à un prix et avec un cycle de vente raisonnable.",
                recommandation: "<li style='box-sizing: border-box; padding: 0; list-style: none; margin: 0px;'> R1: Continuer sur cette voie soyez focus sur vos objectifs. <Ne manquez pas de mesurer votre coube d'évolution./li><li style='box-sizing: border-box; padding: 0; list-style: none; margin: 0px;'> R2: Bravo! Vous avez un produit intéressant et vous avez une bonne analyse de la fréquence à laquelle vous arriver à vendre votre produit.</li>"
            },
        ]
    },
    {
        title: "Marché",
        info: "En assumant une exécution parfaite, votre marché a-t-il les caractéristiques pour vous permettre de gagner assez d’argent et de devenir une grande entreprise?",
        description:"Le marché c’est l’endroit où se trouve votre cible, la zone géographique dans laquelle peut se commercialiser le produit.",
        response: [
            {
                niveau: 1,
                text: "Votre marché cible est petit et n’est pas susceptible de croître rapidement",
                recommandation: "<li style='box-sizing: border-box; padding: 0; list-style: none; margin: 0px;'> Dans ce cas vous perdez votre temps et de l’argent.Pas la peine de vous lancez, passez à autre chose.</li>"
            },
            {
                niveau: 1,
                text: "Vous n'avez aucune idée de la taille de votre marché cible.",
                recommandation: "<li style='box-sizing: border-box; padding: 0; list-style: none; margin: 0px;'> R1: Identifier la taille du marché, connaître les concurrents et les produits qu’ils offrent pour connaître leur forces et faiblesses afin d’offrir un produit supérieur. </li><li style='box-sizing: border-box; padding: 0; list-style: none; margin: 0px;'> R2: Oups! Dis donc vous devez à tout prix le connaître votre marché.C’est la 1ere action à faire. Définissez votre cible, les personnes à qui sont destinées votre produit, faites une estimation de leur nombre pour savoir si votre marché est petit ou grand.</li>"
            },
            {
                niveau: 1,
                text: "Vous avez trouvé une étude qui donne une estimation de la taille du marché.",
                recommandation: "<li style='box-sizing: border-box; padding: 0; list-style: none; margin: 0px;'> R1: Identifier dans le marché votre segment client pour leur offrir le meilleur produit.</li><li style='box-sizing: border-box; padding: 0; list-style: none; margin: 0px;'> R2: Vous avancez.Exploitez cette information pour savoir le segment de marché sur lequel intervenir pour leur offrir les meilleurs produits.</li>"
            },
            {
                niveau: 1,
                text: "Vous avez une analyse descendante plausible de la taille du marché (« les gens dépensent $ X par an sur ce problème et on pense que nous pouvons avoir 15% du Chiffre d’Affaires  avec notre solution. »)",
                recommandation: "<li style='box-sizing: border-box; padding: 0; list-style: none; margin: 0px;'> R1: Vous avez une estimation de la taille du marché = marché d’écoulement garantie, pensez à augmenter votre part de marché en obtenant d’avantage de clients.</li>"
            },
            {
                niveau: 1,
                text: "Vous avez une analyse ascendante plausible de la taille du marché (« Nous pensons pouvoir capturer 10% des utilisateurs du groupe A et 20% des utilisateurs du groupe B, et nous prévoyons de facturer ces utilisateurs respectivement $ X et $ Y »).",
                recommandation: "<li style='box-sizing: border-box; padding: 0; list-style: none; margin: 0px;'> R1: Faire des tests pour avoir des données et une estimation précises du Chiffre d’affaires (CA)de chacun des groupes.</li><li style='box-sizing: border-box; padding: 0; list-style: none; margin: 0px;'> R2: Vous avez une assurance quant à la qualité de votre produit. Vous savez déjà comment récupérer les utilisateurs de vos concurrents et avez une idée de votre CA prévisionnel. C’est très bien. Elargir votre marché est votre priorité.</li>"
            },
            {
                niveau: 1,
                text: "Vous avez une analyse ascendante plausible, soutenue par des expériences et des données (« Il y a X millions d'utilisateurs potentiels pour notre produit, et nous avons fait quelques tests qui montrent que chaque utilisateur serait prêt à payer $ Y / mois »)",
                recommandation: "<li style='box-sizing: border-box; padding: 0; list-style: none; margin: 0px;'> Rendre disponible votre produit sur le marché.</li>"
            },
            {
                niveau: 1,
                text: "Plusieurs grandes entreprises dans votre domaine démontrent qu'il y a un grand marché pour ce que vous faites",
                recommandation: "<li style='box-sizing: border-box; padding: 0; list-style: none; margin: 0px;'> R1:Votre produit sera un succès sur le marché.</li><li style='box-sizing: border-box; padding: 0; list-style: none; margin: 0px;'> R2:Votre produit à de fortes chances devant lui. Vos prédécesseurs vous ont validé. Mettez-vous au travail et inonder le marché.</li>"
            },
        ]
    },
    {
        title: "Financement",
        info: "Avez-vous assez de capital pour réaliser votre plan?",
        description:"C’est l’action par laquelle vous trouvez les ressources financières nécessaire pour un démarrage d’une activité.",
        response: [
            {
                niveau: 1,
                text: "Votre entreprise ne sera pas autosuffisante pendant longtemps, et vous dépendez complètement de la levée de fonds.",
                recommandation: "<li style='box-sizing: border-box; padding: 0; list-style: none; margin: 0px;'> Faite une liste de ceux dont vous avez besoin en terme  équipements et de compétences.</li>"
            },
            {
                niveau: 1,
                text: "Vous avez plusieurs concurrents bien financés et aurez besoin de beaucoup de capitaux pour rivaliser avec eux",
                recommandation: "<li style='box-sizing: border-box; padding: 0; list-style: none; margin: 0px;'> Commencer avec moins de fonds que possible et utiliser vos relations et les plateformes gratuites pour faire de la publicité pour un début.</li>"
            },
            {
                niveau: 2,
                text: "Vous risquez de ne pas lever de fond à temps avant d’avoir des problèmes de trésorerie ",
                recommandation: "<li style='box-sizing: border-box; padding: 0; list-style: none; margin: 0px;'> Dans ce cas vous serez confrontez à des difficultés financières.</li>"
            },
            {
                niveau: 2,
                text: "Vous avez déjà réussi à lever des fonds.",
                recommandation: "<li style='box-sizing: border-box; padding: 0; list-style: none; margin: 0px;'> Gérer bien ces fonds pour ne pas tomber dans un déficit. Etsurtout,chercher à  prouver à vos investisseurs qu'ils peuvent vous donner leur entière confiance.</li>"
            },
            {
                niveau: 3,
                text: "Vous avez déjà effectué une grosse levée de fonds avec succès.",
                recommandation: "<li style='box-sizing: border-box; padding: 0; list-style: none; margin: 0px;'> C’est une preuve que beaucoup de personnes valident votre projet. Tâchez de maintenir leur confiance et d’utiliser efficacement les fonds pour développer votre projet.</li>"
            },
            {
                niveau: 3,
                text: "Vous avez déjà levée des fonds pour votre entreprise actuelle, et ils suffisent pour atteindre l’étape suivante",
                recommandation: "<li style='box-sizing: border-box; padding: 0; list-style: none; margin: 0px;'> Passez à l’étape suivante.</li>"
            },
            {
                niveau: 4,
                text: "Vos investisseurs actuels sont capables d’investir dans votre prochain levée de fonds",
                recommandation: "<li style='box-sizing: border-box; padding: 0; list-style: none; margin: 0px;'> Maintenir la confiance de vos investisseurs en leur montrant les choses réalisés par l’entreprise avec la précédente levée de fonds, montrer évolution et l’amélioration des prestations de l’entreprise."
            },
            {
                niveau: 4,
                text: "Avec des efforts et des sacrifices, vous pourriez atteindre le seuil de rentabilité sans avoir besoin de capitaux supplémentaires.",
                recommandation: "<li style='box-sizing: border-box; padding: 0; list-style: none; margin: 0px;'> R1: Bravo! Votre entreprise est auto-suffisante, elle attirera  certainement de nouveaux investisseurs. </li><li style='box-sizing: border-box; padding: 0; list-style: none; margin: 0px;'> R2: Votre entreprise a de la valeur.C’est l’occasion d’ouvrir votre capital et de permettre à des investisseurs de vous accompagner dans la  croissance de votre entreprise.</li>"
            },
            {
                niveau: 5,
                text: "Vous n'êtes pas dépendant de capitaux supplémentaires parce que vous pouvez facilement atteindre votre seuil de rentabilité ou devenir rentable à tout moment",
                recommandation: "<li style='box-sizing: border-box; padding: 0; list-style: none; margin: 0px;'> Très bien, vous avez su gérer votre fond d’investissement. Rester sur la même ligne.</li>"
            },
        ]
    },
    {
        title: "Compétition à court terme",
        info: "Quel est la différence entre vous et vos compétiteurs?",
        description:false,
        response: [
            {
                niveau: 1,
                text: "Il y a beaucoup de concurrents de toutes tailles. (grands entreprises, jeunes entreprises en démarrage, startups bien financées, etc.) Ces entreprises attaquent votre marché cible de toutes parts.",
                recommandation: false,
            },
            {
                niveau: 2,
                text: "Il y a beaucoup de concurrents, mais ils n’innovent plus ou sont des startups mal financées",
                recommandation: "<li style='box-sizing: border-box; padding: 0; list-style: none; margin: 0px;'> Innovez pour trouver un bon financement.</li>"
            },
            {
                niveau: 3,
                text: "Il y a très peu de concurrents, mais pas de forte différenciation entre vous et eux.",
                recommandation: "<li style='box-sizing: border-box; padding: 0; list-style: none; margin: 0px;'> Trouver un élément de différenciation entre vous et vos concurrents cela vous permettra de vous démarquer sur le marché.</li>"
            },
            {
                niveau: 3,
                text: "Il y a très peu de concurrents, et une forte différenciation entre vous et eux.",
                recommandation: "<li style='box-sizing: border-box; padding: 0; list-style: none; margin: 0px;'> Super, miser sur l’élément de différenciation  pour offrir un service de qualité.</li>"
            },
            {
                niveau: 4,
                text: "Il n'y a pas de concurrents et il y a une grande barrière à l'entrée (que vous avez franchie).",
                recommandation: "<li style='box-sizing: border-box; padding: 0; list-style: none; margin: 0px;'> Produit innovant.</li>"
            },
        ]
    },
    {
        title: "Compétition à long terme",
        info: "Lorsque vous aurez du succès et que d'autres entreprises essaieront de vous copier, serez-vous en mesure de maintenir votre position de force?",
        description:false,
        response: [
            {
                niveau: 1,
                text: "Vous n'êtes pas le précurseur du marché, et votre n'avez pas un réel avantage concurrentiel.",
                recommandation: false,
            },
            {
                niveau: 2,
                text: "Vous n'avez pas un réel avantage concurrentiel, mais au moins vous êtes le précurseur du marché.",
                recommandation: false,
            },
            {
                niveau: 3,
                text: "Votre avantage concurrentiel est faible: quelques petits brevets, une économie d’échelle légèrement meilleure que celle des nouveaux entrants, etc.",
                recommandation: false,
            },
            {
                niveau: 3,
                text: "Vous avez un avantage concurrentiel moyen: une bonne perception de la marque auprès de vos clients, une économie d'échelle significativement meilleure, un portefeuille de brevets solide, etc.",
                recommandation: false,
            },
            {
                niveau: 4,
                text: "Vous avez de forts avantages concurrentiels, comme des effets de réseau ou des  données propriétaires, qui se renforcent au fur et à mesure que vous grandissez.",
                recommandation: false,
            }
        ]
    }
]
