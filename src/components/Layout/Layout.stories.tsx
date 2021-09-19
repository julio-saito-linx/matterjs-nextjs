import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { Layout, LayoutProps } from './Layout'
import { LinksList } from '../../model/site/LinksList'
import { ThemeList } from '../../model/site/ThemeList'

export default {
  title: 'Component/Pages/Layout',
  component: Layout,
  argTypes: {
    internal_theme: {
      options: Object.values(ThemeList).map((t) => t.id),
      control: { type: 'select' },
    },
  },
} as Meta

const Template: Story<LayoutProps> = (args) => <Layout {...args} />

// Default scenario
export const MainLayout = Template.bind({})
MainLayout.args = {
  title: (
    <div className='flex items-baseline flex-grow px-2 mx-2 space-x-3'>
      <div className='text-base font-bold'>HOME</div>
      <div className='text-sm'>{process.env.NEXT_PUBLIC_SITE_NAME}</div>
    </div>
  ),
  menuItems: Object.values(LinksList),
  children:
    'Lorem ipsum dolor sit amet, consectetur adipiscing. Vestibulum rutrum metus at enim congue scelerisque. Sed suscipit metu non iaculis semper consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing. Vestibulum rutrum metus at enim congue scelerisque. Sed suscipit metu non iaculis semper consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing. Vestibulum rutrum metus at enim congue scelerisque. Sed suscipit metu non iaculis semper consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing. Vestibulum rutrum metus at enim congue scelerisque. Sed suscipit metu non iaculis semper consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing. Vestibulum rutrum metus at enim congue scelerisque. Sed suscipit metu non iaculis semper consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing. Vestibulum rutrum metus at enim congue scelerisque. Sed suscipit metu non iaculis semper consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing. Vestibulum rutrum metus at enim congue scelerisque. Sed suscipit metu non iaculis semper consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing. Vestibulum rutrum metus at enim congue scelerisque. Sed suscipit metu non iaculis semper consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing. Vestibulum rutrum metus at enim congue scelerisque. Sed suscipit metu non iaculis semper consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing. Vestibulum rutrum metus at enim congue scelerisque. Sed suscipit metu non iaculis semper consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing. Vestibulum rutrum metus at enim congue scelerisque. Sed suscipit metu non iaculis semper consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing. Vestibulum rutrum metus at enim congue scelerisque. Sed suscipit metu non iaculis semper consectetur adipiscing elit.',
}
