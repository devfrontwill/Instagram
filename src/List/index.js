import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';

export default function List ({ data }){

    function carregaIcone(likeada){
        if (likeada) {
            return require('../img/likeada.png');
        } 
        else {
            return require('../img/like.png');
        }
    }

    function mostraLikes(likers){
        if(likers === 0){
            return;
        }

        return(
            <Text style={styles.likes} > {likers} {likers > 1 ? 'curtidas' : 'curtida'} </Text>
        );
    }


    return(
        <View>
            <View style={styles.viewPerfil} >
                <Image 
                    source={{ uri: data.imgperfil }}
                    style={styles.fotoPerfil}
                />
                <Text style={styles.nomeUsuario}> {data.nome} </Text>
            </View>

            <Image
                resizeMode="cover"
                source={{ uri: data.imgPublicacao }}
                style={styles.fotoPublicacao}
            />

            <View  style={styles.areaBtn}>
                <TouchableOpacity>
                    <Image
                    source={carregaIcone(data.likeada)}
                    style={styles.iconeLike}
                    />
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnsend} >
                    <Image
                    source={require('../img/comment.png')}
                    style={styles.iconeLike}
                    />
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnsend} >
                    <Image
                    source={require('../img/send.png')}
                    style={styles.iconeLike}
                    />
                </TouchableOpacity>
            </View>

            {mostraLikes(data.likers)}

            <Text style={styles.nomeRodape} >
                {data.nome}
            </Text>

            <Text style={styles.descricaoRodape} >
                {data.descricao}
            </Text>

        </View>
    )
}

const styles = StyleSheet.create ({
    viewPerfil:{
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        padding: 8
    },
    fotoPerfil: {
        width: 50,
        height: 50,
        borderRadius: 25
    },
    nomeUsuario: {
        paddingLeft: 5,
        fontSize: 22,
        color: '#000',
    },
    fotoPublicacao: {
        height: 400,
        alignItems: 'center',
    },
    areaBtn: {
        flexDirection: 'row',
        padding: 5,
    },
    iconeLike: {
        width: 25,
        height: 25
    },
    btnsend: {
        paddingLeft: 5
    },
    likes: {
        fontWeight: 'bold',
        marginLeft: 5,
    },
    nomeRodape: {
        fontSize: 18,
        fontWeight: 'bold',
        paddingLeft: 5,
    },
    descricaoRodape: {
        paddingLeft: 5,
        paddingBottom: 10,
        fontSize: 15
    }
})