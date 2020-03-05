import React, { useState } from 'react';
import { Text, View, StyleSheet, FlatList, Image, Button, Modal, ImageBackground, ScrollView } from 'react-native';


import StoryItem from './story-item';
import indexjs from './index';
export default function Story({ Username }) {
    const storys =
    {
        info: [
            {
                key: "01",
                avatar: "https://upload.wikimedia.org/wikipedia/vi/3/3e/Detective_conan_cover_1.jpg",
                name: "Connan",
                category: "Truyện tranh",
                total_chapters: "968+",
                status: true,
                content:'Shinichi Kudo là một thám tử đang theo học tại Trung học Teitan. Giỏi thể thao và đặc biệt là có óc suy luận tài tình, Shinichi được cảnh sát tin tưởng khi tham gia giúp đỡ họ trong rất nhiều vụ điều tra hóc búa.'
            }, {
                key: "02",
                avatar: "https://upload.wikimedia.org/wikipedia/vi/a/af/Son_Goku_YoungAdult.PNG",
                name: "Son Goku",
                category: "Truyen tranh",
                total_chapters: "900",
                status: false,
                content:'Một cậu bé có đuôi khỉ tên là Goku được tìm thấy bởi một ông lão sống một mình trong rừng, ông lão xem đứa bé như là cháu của mình. Một ngày nọ Goku tình cờ gặp một cô gái tên là Bulma trên đường đi bắt cá về, Goku và Bulma đã cùng nhau truy tìm bảy viên ngọc rồng. Bảy viên ngọc rồng chứa đựng một bí mật có thể triệu hồi một con rồng và ban điều ước cho ai sở hữu chúng.'
            },
            {
                key: "03",
                avatar: "https://upload.wikimedia.org/wikipedia/vi/thumb/3/33/Shin_cau_be_but_chi_tap_1.jpeg/230px-Shin_cau_be_but_chi_tap_1.jpeg",
                name: "Shin ",
                category: "Hài, Lát cắt cuộc sống ",
                total_chapters: "50",
                status: false,
                content:'Shin – Cậu bé bút chì, còn được biết đến với tựa đề tiếng Anh: Crayon Shin-chan, là một bộ truyện tranh do Yoshito Usui sáng tác và minh họa, với nhân vật chính là Shin, tên viết tắt của Shinnosuke, một cậu bé mới lên 5 tuổi trong một gia đình Nhật Bản bình thường'
            },
            {
                key: "04",
                avatar: "https://upload.wikimedia.org/wikipedia/vi/0/02/My_Neighbor_Totoro_-_Tonari_no_Totoro_%28Movie_Poster%29.jpg",
                name: "Tonari no Totoro",
                category: "Truyen tranh",
                total_chapters: "100",
                status: true,
                content:'Hàng xóm của tôi là Totoro là một phim hoạt hình Nhật Bản được hãng Ghibli sản xuất vào năm 1988, vua hoạt hình của Nhật Bản Miyazaki Hayao viết kịch bản và đạo diễn'
            }

        ]
    };

    const [listStory, setListStory] = useState(true);

    const [dataStory, setDataStory] = useState(storys);

    const [showModal, setShowModal] = useState(false);

    // console.log(dataStory);

    //Delete---------
    const handle_Delete = (key) => {
        let newStorys = dataStory.info;

        newStorys = newStorys.filter((story) => story.key != key);
        storys.info = newStorys;
        console.log(storys);

        setDataStory(storys)
        setListStory();

    }
    // Delete----------
    return (
        <View >

            <View style={{
                borderWidth: 1,
                marginTop: 25,
                marginBottom: 10,
                marginHorizontal: 90,
                borderColor: '#424242',
                borderRadius: 20,
                backgroundColor: '#D3D3D3'
            }}>
                <Text style={{
                    textAlign: 'center',
                    fontWeight: 'bold',
                    fontSize: 30,
                    color: '#424242',
                    fontStyle: 'normal',
                    paddingVertical: 2,
                    color: '#888985'
                }}>{Username}</Text>
            </View>
            <View>
               
                    <FlatList
                        data={dataStory.info}
                        renderItem={({ item }) => <StoryItem item={item} handle_DeleteItem={handle_Delete} />}
                        keyExtractor={(item, story) => story}
                    />
                
            </View>

            {/* Show Detal */}
            <View>
                <Modal visible={showModal}>

                </Modal>
            </View>

            {/*  */}
        </View>

    );
}
const style = StyleSheet.create({
    profileContainer: {
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center',
        marginTop: 16,
        width: '100%',
        height: 150,
        padding: 24,
    },
    avatar: {},
    image: {
        width: 200,
        height: 200,
        borderRadius: 200
    }
});