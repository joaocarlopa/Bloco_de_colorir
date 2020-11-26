document.getElementById('info').onclick = function () {
    alert("Este bloco de desenho contém 1.620 quadrados 11x11 ! ");

}





let cliqueT = false;




function inicia() {


    return {



        recebeClique() {
            this.pegaClique();
            
            

        },

        

        pegaClique() {
            let cores = '';
            let banco = ['red', 'green', 'pink', 'black', 'white', 'blue', 'yellow', 'roxo'];
        
            document.addEventListener('click', x => {
                
            

                const rx = x.target;

                function clique() {
                    
                    repeteClique();
                    if (!cliqueT) return 'mousedown';
                    return 'mousemove';
                }

                function repeteClique() {
                    
                   
                
                    const recebe = document.querySelector('.clique');
                    recebe.onclick = function () {
                        cliqueT = true;
                    }
                
                
                }

                if (rx.classList.contains("tudo")) {
                    if (rx.classList.contains('it')) {
                        x.preventDefault();
                    }
                }
                

                
                if (rx.classList.contains('clique')) {
                    x.preventDefault();
                    clique();
                }
                
                if (rx.classList.contains("btn_del")) {
                    x.preventDefault();
                    cores = '';
                }

                if (rx.classList.contains('btn_reset')) {
                    x.preventDefault();
                    const mudaAll = document.querySelectorAll('.td');
                    mudaAll.forEach(element => {
                        for (let i of banco) {
                            
                            element.classList.replace(i, 'remove');
                        }
                        
                    })
                }

                if (rx.classList.contains('grade')) {
                    x.preventDefault();
                    const classes = document.querySelectorAll('.td');
                    classes.forEach(element => {
                        element.classList.add('grades');
                    });
                }
                if (rx.classList.contains('gradeRemove')) {
                    x.preventDefault();
                    const classesDel = document.querySelectorAll('.td');
                    classesDel.forEach(element => {
                        element.classList.replace('grades', 'nada');
                    })
                }


                if (rx.classList.contains('blu')) {
                    x.preventDefault();
                    cores = 'blue';

                
                }
                if (rx.classList.contains('re')) {
                    x.preventDefault();
                    cores = 'red';

                }

                if (rx.classList.contains('gre')) {
                    x.preventDefault();
                    cores = 'green';

                }

                if (rx.classList.contains('bla')) {
                    x.preventDefault();
                    cores = 'black';

                }

                if (rx.classList.contains('yel')) {
                    x.preventDefault();
                    cores = 'yellow';

                }

                if (rx.classList.contains('whi')) {
                    x.preventDefault();
                    cores = 'white';

                }

                if (rx.classList.contains('rox')) {
                    x.preventDefault();
                    cores = 'roxo';

                }

                if (rx.classList.contains('ros')) {
                    x.preventDefault();
                    cores = 'pink';

                }










                document.addEventListener(clique(), y => {
                    const xe = y.target;

                    
                    if (xe.classList.contains('td')) {
                        y.preventDefault();
                        if (xe.classList.contains('green')) {

                            xe.classList.remove('green');
                            xe.classList.add('cores');
                            cores = cores;
                        }

                        if (xe.classList.contains('red')) {

                            xe.classList.remove('red');
                            xe.classList.add('cores');
                            cores = cores;
                        }

                        if (xe.classList.contains('yellow')) {

                            xe.classList.remove('yellow');
                            xe.classList.add('cores');
                            cores = cores;
                        }

                        if (xe.classList.contains('black')) {

                            xe.classList.remove('black');
                            xe.classList.add('cores');
                            cores = cores;
                        }

                        if (xe.classList.contains('blue')) {

                            xe.classList.remove('blue');
                            xe.classList.add('cores');
                            cores = cores;
                        }

                        if (xe.classList.contains('white')) {

                            xe.classList.remove('white');
                            xe.classList.add('cores');
                            cores = cores;
                        }

                        if (xe.classList.contains('pink')) {

                            xe.classList.remove('pink');
                            xe.classList.add('cores');
                            cores = cores;
                        }

                        if (xe.classList.contains('roxo')) {

                            xe.classList.remove('roxo');
                            xe.classList.add('cores');
                            cores = cores;
                        }





                        xe.classList.replace('cores', cores);







                    }

                })



            })

        },







    }
}

const chama = inicia();

chama.recebeClique()

