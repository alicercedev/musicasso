import { products } from '@/data/product';
import { router } from 'expo-router';
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function Produtos() {

  return (
    <View style={styles.container}>
      <View style={styles.fundo}>
      <Text style={styles.titulo}>Músicas</Text>
      </View>
      <ScrollView style={styles.musicas} contentContainerStyle={styles.musicasConteudo}>
        {products.map((product) => (
        
          <Pressable style={styles.card} key={product.id} onPress={() => router.push(`/products/${product.id}`)}>
            <Image source={product.icon} style={styles.icone} />
            <View style={styles.info}>
            <Text style={styles.nome}>{product.name}</Text>
            <Text style={styles.artista}>{product.artist}</Text>
            </View>
          </Pressable>
        
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#080d24',
  },
  musicas: {
    flex: 1,
    backgroundColor: '#080d24',
  },
  musicasConteudo: {
    margin: 12,
    gap: 12,
  },
  card: {
    backgroundColor: '#121a38',
    padding: 12,
    borderRadius: 18,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#273254',
  },
  info: {
    marginLeft: 12,
    flex: 1
  },
  icone: {
    width: 112,
    height: 112,
    resizeMode: 'contain',
  },
  nome: {
    color: '#f5f6ff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  artista: {
    color: '#a0a0a0',
    fontSize: 17,
  },
  titulo: {
    marginLeft: 22,
    fontWeight: 'bold',
    fontSize: 30,
    color: '#fff',
  },
  fundo: {
    backgroundColor: '#ff7100',
    height: 116,
    justifyContent: 'center',
    borderBottomLeftRadius: 22,
    borderBottomRightRadius: 22,
  }
});