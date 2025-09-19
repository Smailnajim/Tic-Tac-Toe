# Tic-Tac-Toe
 Développer un jeu Tic Tac Toe dynamique en utilisant principalement JavaScript, HTML et CSS.

## Documentation technique

- n.addEventListener('input', function(){})  --->  Mettre à jour n et appeler une fonction lyerPlay()

- function lyerPlay() ---> Vous modifiez la grille en fonction du nombre n et ramenez également le joueur x pour jouer à nouveau comme le
                       premier

- lyer.addEventListener('click', function(event){})  ---> J'ai ajouté un événement à Lyer pour utiliser le concept de Event DELEGATION et 
                                                        utilisez  whoPlayNow() et checkWiner(event.target.id)

- function whoPlayNow()  ---> Modifie la couleur de la case de chaque jeton après une partie pour indiquer qui doit jouer.


- function checkWiner(index) ---> Vérifiez si le joueur a gagné ou si la partie s'est terminée par un match nul.
                             ---> La fonction winGame() est également appelée si l'un des joueurs gagne.
- function winGame()
