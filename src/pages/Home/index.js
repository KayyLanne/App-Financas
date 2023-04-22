import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList} from 'react-native';
import Header from '../../Components/Header'
import Balance from '../../Components/Balance';
import Movements from '../../Components/Movements';

const list = [
    {
        id: 1,
        label: 'Boleto conta luz',
        value: '300,20',
        date: '22/05/2022',
        type: 0      //COMO INDENTIFICAR DESPESAS
    },

    {
        id: 2,
        label: 'Pix Mãe Deyse',
        value: '650,00',
        date: '09/03/2023',
        type: 1      //COMO INDENTIFICAR GANHOS
    },

    {
        id: 3,
        label: 'Pix Pai Gilvanio',
        value: '80,00',
        date: '24/09/2022',
        type: 1      //COMO INDENTIFICAR GANHOS
    },
]



export default function Home() {
return (
    <View style={styles.container}>
        <Header name="Kaylanne Regina" />
        
        <Balance saldo="9.152,00" gastos="630,00"/>

        <Text style={styles.title}>Últimas movimentações</Text>

        <FlatList
            style={styles.list}
            data={list}
            keyExtractor={ (item) => String(item.id)}
            showsVerticalScrollIndicator={false}
            renderItem={ ( {item} ) => <Text> <Movements data={item} /> </Text>}
        />

    </View>
);
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafafa',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 14,
        marginRight: 14,
        marginTop: 14,
    },
    list: {
        marginStart: 14,
        marginEnd: 14,
    }

});
