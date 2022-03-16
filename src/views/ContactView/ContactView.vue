<template>
    <div class="row content">
        <img class="bakcground-image" src="../../assets/nysl_logo.png"/>
        <h1>Información de Contacto</h1>
        <div class="content__div col-sm-12">

            <table class="table">
                <thead>
                    <tr>
                        <th>Equipo</th>
                        <th>Entrenador</th>
                        <th>Fono</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>U1</td>
                        <td>Juan Pérez</td>
                        <td><a href="tel:+56 9 98765432"> +56 9 98765432</a></td>
                        <td><a href="email:jperez@ejemplo.cl">jperez@ejemplo.cl</a></td>
                    </tr>
                    <tr>
                        <td>U2</td>
                        <td>Pedro Pérez</td>
                        <td><a href="tel:+56 9 23456789"> +56 9 23456789</a></td>
                        <td><a href="email:pperez@ejemplo.cl">pperez@ejemplo.cl</a></td>
                    </tr>
                    <tr>
                        <td>U3</td>
                        <td>Juana González</td>
                        <td><a href="tel:+56 9 123321123"> +56 9 123321123 </a></td>
                        <td><a href="email:jgonzalez@ejemplo.cl">jgonzalez@ejemplo.cl</a></td>
                    </tr>
                    <tr>
                        <td>U4</td>
                        <td>Speedy González</td>
                        <td><a href="tel:+56 9 91827364"> +56 9 91827364</a></td>
                        <td><a href="email:sgonzalez@ejemplo.cl">sgonzalez@ejemplo.cl</a></td>
                    </tr>
                    <tr>
                        <td>U5</td>
                        <td>Pedro Picapiedra</td>
                        <td><a href="tel:+56 9 987000789"> +56 9 987000789</a></td>
                        <td><a href="email:ppicapiedra@ejemplo.cl">ppicapiedra@ejemplo.cl</a></td>
                    </tr>
                    <tr>
                        <td>U6</td>
                        <td>Mojo Jojo</td>
                        <td><a href="tel:+56 9 90098764"> +56 9 90098764</a></td>
                        <td><a href="email:mojojojo@ejemplo.cl">mojojojo@ejemplo.cl</a></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<style>
    @import './ContactView.scss';
</style>

<script>
    export default {
        name: 'ContactView'
    }
</script>