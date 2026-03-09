import { View, Text, Image, Button } from 'react-native'
import {styles} from './StylesDetails'

const LojaDetalhes = ({route, navigation}) => {
    
    const {loja} = route.params

  return (
    <View style={styles.container}>
      <Image source={{uri: loja.imagem}} style={styles.image}/>

      <View style={styles.content}>
        <Text style={styles.nome}>{loja.nome}</Text>
        <Text style={styles.categoria}>{loja.categoria}</Text>
        <Text style={styles.descricao}>Bem-vindo a {loja.nome}! Aqui você encontra</Text>

        <Button
            title='Voltar para home'
            onPress={() => navigation.goBack()}
            color="#27ae60"
        />
      </View>
    </View>
  )
}

export default LojaDetalhes