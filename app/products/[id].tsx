import { products } from '@/data/product';
import { useAudioPlayer, useAudioPlayerStatus } from 'expo-audio';
import { router, useLocalSearchParams } from 'expo-router';
import { Image, Pressable, ScrollView, StyleSheet, Text, View, } from 'react-native';

export default function ProductDetail() {
  const { id } = useLocalSearchParams();
  const product = products.find(
    (product) => product.id === id
  );


  if (!product) {
    return (
      <View style={styles.erro}>
        <Text style={styles.erroTitulo}>Produto não encontrado</Text>
        <Text style={styles.erroTexto}>
          nao existe mermao
          desiste
          ta feio ja
        </Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>

        <Image
          source={product.icon}
          style={styles.imagem}
        />

        <View style={styles.conteudo}>
          <Text style={styles.nome}>
            {product.name}
          </Text>

          <Text style={styles.descricao}>
            {product.artist}
          </Text>
          

          <Pressable
            onPress={() => router.back()}
            style={styles.voltarButton}
          >
            <Text style={styles.voltarTexto}>Voltar</Text>
          </Pressable>
        </View>

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  
    backgroundColor: '#1f1f1f',
  },

  card: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    padding: 12,
  },

  imagem: {
    width: 220,
    height: 220,
    resizeMode: 'contain',
    marginTop: 8,
    marginBottom: 12,
  },

  conteudo: {
    width: '100%',
    maxWidth: 420,
    backgroundColor: '#2b2b2b',
    borderRadius: 15,
    padding: 16,
    alignItems: 'center',
  },

  nome: {
    color: '#ffffff',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },

  descricao: {
    color: '#bdbdbd',
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 20,
    textAlign: 'center',
    width: '100%',
  },


  voltarButton: {
    width: '100%',
    maxWidth: 220,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 18,
    alignItems: 'center',
  },

  voltarTexto: {
    color: '#000000',
    fontSize: 16,
    fontWeight: '600',
  },

  erro: {
    flex: 1,
    backgroundColor: '#1f1f1f',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
  },

  erroTitulo: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  erroTexto: {
    color: '#999999',
    fontSize: 16,
    textAlign: 'center',
  },
});