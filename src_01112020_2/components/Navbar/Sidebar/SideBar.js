import React from 'react'
import { Header, Icon, Image, Menu, Segment, Sidebar, Grid, Checkbox } from 'semantic-ui-react'

const SidebarExampleSidebar = () => {
  const [visible, setVisible] = React.useState(false)

  return (
    <Grid columns={1}>
      <Grid.Column>
        <Checkbox
          checked={visible}
          label={{ children: <code>visible</code> }}
          onChange={(e, data) => setVisible(data.checked)}
        />
      </Grid.Column>

      <Grid.Column>
        <Sidebar.Pushable as={Segment}>
          <Sidebar
            as={Menu}
            animation='overlay'
            icon='labeled'
            inverted
            onHide={() => setVisible(false)}
            vertical
            visible={visible}
            width='thin'
          >
            <Menu.Item as='a'>
              <Icon name='home' />
              Home
            </Menu.Item>
            <Menu.Item as='a'>
              <Icon name='gamepad' />
              Games
            </Menu.Item>
            <Menu.Item as='a'>
              <Icon name='camera' />
              Channels
            </Menu.Item>
          </Sidebar>

          <Sidebar.Pusher>
            <Segment basic>
              <Header as='h3'>Application Content</Header>
              <Image src='/images/wireframe/paragraph.png' />
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Grid.Column>
    </Grid>
  )
}

export default SidebarExampleSidebar



// import React from 'react'
// import {
//   Checkbox,
//   Grid,
//   Header,
//   Image,
//   Button,
//   Menu,
//   Ref,
//   Segment,
//   Sidebar,
// } from 'semantic-ui-react'

// const SidebarExampleTarget = () => {
//   const segmentRef = React.useRef()
//   const [visible, setVisible] = React.useState(false)

//   return (
//     <Grid columns={1}>
//       <Grid.Column>
//         <Checkbox
//           checked={visible}
//           label={{ children: <code>visible</code> }}
//           onChange={(e, data) => setVisible(data.checked)}
//         />
//       </Grid.Column>

//       <Grid.Column>
//         <Sidebar.Pushable as={Segment.Group} raised>
//           <Sidebar
//             as={Menu}
//             animation='overlay'
//             icon='labeled'
//             inverted
//             onHide={() => setVisible(false)}
//             vertical
//             //target={segmentRef}
//             visible={visible}
//             width='thin'
//           >
//             <Menu.Item as='a'>Home</Menu.Item>
//             <Menu.Item as='a'>Games</Menu.Item>
//             <Menu.Item as='a'>Channels</Menu.Item>
//           </Sidebar>
// {/* 
//           <Ref innerRef={segmentRef}>
//             <Segment secondary>
//               <Header as='h3'>Clickable area</Header>
//               <p>When you will click there, the sidebar will be closed.</p>
//             </Segment>
//            </Ref>

//           <Segment>
//             <Header as='h3'>Application Content</Header>
//             <Image src='/images/wireframe/paragraph.png' />
//           </Segment> */}
//         </Sidebar.Pushable>
//       </Grid.Column>
//     </Grid>
//   )
// }

// export default SidebarExampleTarget