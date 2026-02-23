import { View, Text, FlatList, StyleSheet } from "react-native";
import {LOJAS} from '../../data/mockData'
import LojaCard from "../../components/LojaCard";
import { styles } from "./HomeStyle";

const HomeScreen = () => {
  return (
    <View>
      <Text>Lojas Próximas</Text>

      <FlatList
        data={LOJAS}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => <LojaCard loja={item} />}
        contentContainerStyle={styles.list}
      />
    </View>
  )
}

export default HomeScreen