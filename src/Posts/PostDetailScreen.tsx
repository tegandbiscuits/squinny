import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, useWindowDimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Surface, Text } from 'react-native-paper';
import { useObservable } from 'react-use';
import { RouteProp } from '@react-navigation/native';
import lemmyClient from '../lemmy-client';
import { PostView } from 'lemmy-js-client';

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
    maxHeight: 400,
  },
});

interface ImageSize {
  width: number;
  height: number;
}

interface Props {
  route: RouteProp<any>;
}

function PostDetailScreen({ route }: Props) {
  const lemmy = useObservable(lemmyClient);
  const [postData, setPostData] = useState<PostView | null>(null);
  const [imageSize, setImageSize] = useState<ImageSize>({ width: 0, height: 0 });
  const dimensions = useWindowDimensions();

  useEffect(() => {
    if (route.params?.postId) {
      lemmy
        ?.getPost({ id: route.params.postId })
        .then((res) => {
          setPostData(res.post_view);
        });
    }
  }, [lemmy, route.params?.postId]);

  console.log('the post data', postData);

  if (!postData) {
    return <Text>oh hold on</Text>;
  }

  return (
    <ScrollView>
      <Surface>
        <Text variant="titleLarge">{postData.post.name}</Text>
        {postData.post.body && (
          <Text variant="bodyMedium">{postData.post.body}</Text>
        )}
        {postData.post.url && (
          <Image
            width={dimensions.width}
            height={dimensions.width}
            resizeMode="contain"
            source={{ uri: postData.post.url }}
            onLoadStart={() => {
              console.log('hey i have started');
            }}
            onLoad={({ nativeEvent: { source } }) => {
              console.log('loaded', source);
              setImageSize({
                width: source.width,
                height: source.height,
              });
            }}
          />
        )}
      </Surface>
    </ScrollView>
  );
}

export default PostDetailScreen;
