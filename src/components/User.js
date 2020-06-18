import React from 'react'
import { Box, Column, Title, Card, Image, Media, Content } from 'rbx'
import { ColumnGroup } from 'rbx/grid/columns/column-group'
import Timeline from './Timeline'

const User = React.memo(({ data }) => {
  return (
    <div>
      <Column.Group centered>
        <Column size="half">
          <Box>
            <Card>
              <Card.Image>
                <Image.Container size="1by1">
                  <Image src={data.avatar_url} />
                </Image.Container>
              </Card.Image>
              <Card.Content>
                <Media>
                  <Media.Item as="figure" align="left">
                    <Image.Container as="p" size={64}>
                      <Image alt="64x64" src={data.avatar_url} />
                    </Image.Container>
                  </Media.Item>
                  <Media.Item>
                    <Title as="p" size={4}>
                      {data.login}
                    </Title>
                    <Title as="p" subtitle size={6}>
                      @{data.login}
                    </Title>
                  </Media.Item>
                </Media>
                <Content>
                  {data.bio}
                  <br />
                  <h4 style={{ marginTop: '15px' }}>Created At</h4>
                  <time dateTime="true">{data.created_at}</time>
                </Content>
              </Card.Content>
            </Card>
          </Box>
        </Column>
      </Column.Group>
      <Timeline user={data} />
    </div>
  )
})

export default User
