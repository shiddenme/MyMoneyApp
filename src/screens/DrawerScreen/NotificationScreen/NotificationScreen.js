import React from 'react';
import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    View,
    FlatList,
    StatusBar,
    Alert,

    ImageBackground,
} from 'react-native';
import { Container, Header, Title, Content, Button, Left, Right, Body, Text, List, ListItem, Thumbnail } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';


//TODO: Custome Pages
import { colors, images } from "../../../constants/Constants";


//TODO: Json Files  
import notificationData from "../../../assets/jsonfiles/notificationScreen/notificationScreen.json";


export default class NotificationScreen extends React.Component {

    constructor(props) {
        super(props)
        StatusBar.setBackgroundColor(colors.appColor, true);
        this.state = {
            data: [],

        }
    }

    componentWillMount() {
        this.getNotification();
    }


    //TODO: Fun GetNotificaiton
    getNotification() {
        this.setState({
            data: notificationData.notification
        });
    }

    render() {
        return (
            <Container>
                <View style={styles.container}>
                    <Header transparent style={{ backgroundColor: colors.appColor }}>
                        <Left>
                            <Button transparent onPress={() => this.props.navigation.goBack()}>
                                <Icon name='chevron-left' size={25} color="#ffffff" />
                            </Button>
                        </Left>

                        <Body>
                            <Title>Notification</Title>
                        </Body>
                    </Header>

                    <View style={styles.notificaitonListView}>
                        <FlatList
                            data={this.state.data}
                            showsVerticalScrollIndicator={false}
                            renderItem={({ item }) =>
                                <List>
                                    <ListItem thumbnail>
                                        <Left>   
                                            <Image    
                                                style={styles.notificationIcon}
                                                source={{ uri: item.icon }}   
                                            />   
                                        </Left>   
                                        <Body>
                                            <Text style={styles.txtTransTitle}>{item.title}</Text>
                                        </Body>
                                    </ListItem>
                                </List>
                            }
                            keyExtractor={item => item.id}
                        />
                    </View>





                </View>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },   
    notificationIcon: {
        height: 50,
        width: 50,
        borderRadius: 25,
    }
});