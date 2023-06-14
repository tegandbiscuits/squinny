import React, { useEffect, useState } from 'react';
import { Card } from 'react-native-paper';
import { FlatList } from 'react-native-gesture-handler';
import { PostView } from 'lemmy-js-client';
import { useObservable } from 'react-use';
import lemmyClient from '../lemmy-client';

function PostListScreen() {
  const lemmy = useObservable(lemmyClient);
  const [posts, setPosts] = useState<PostView[]>([]);

  useEffect(() => {
    console.log('getting posts', lemmy);
    lemmy?.getPosts({}).then((res) => {
      setPosts(res.posts);
    }).catch((err) => {
      // need to do something for the user
      throw new Error(`Failed to load posts: ${err}`);
    });
  }, [lemmy, setPosts]);

  return (
    <FlatList
      data={posts}
      keyExtractor={(item) => item.post.ap_id}
      renderItem={({ item }) => (
        <Card>
          {item.post.thumbnail_url && (
            <Card.Cover source={{ uri: item.post.thumbnail_url }} />
          )}
          <Card.Title title={item.post.name} />
        </Card>
      )}
    />
  );
}

export default PostListScreen;
