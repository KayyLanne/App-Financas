import { StyleSheet, Text, View, FlatList} from 'react-native';

import Header from '../../Components/Header'
import Balance from '../../Components/Balance';
import Movements from '../../Components/Movements';
import Actions  from '../../Components/Actions';

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
        
        <Balance saldo="9.152,00" gastos="-630,00"/>

        <Actions></Actions>

        <Text style={styles.title}>Últimas movimentações</Text>

        <FlatList
            style={styles.list}
            data={list}
            keyExtractor={ (item) => String(item.id)}
            showsVerticalScrollIndicator={false}
            renderItem={ ( {item} ) =>  <Movements data={item}/>}
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
        margin: 14,
    },
    list: {
        marginStart: 14,
        marginEnd: 14,
    }

});
