import React from 'react';
import { useStyletron } from 'baseui';
import { Footer } from '../../Core/Components/Footer';
import { Sidebar } from '../../Core/Components/Sidebar';
import { useRecoilValue } from 'recoil';
import { headerOpenAtom } from '../../Core/Components/Header/atom';
import { Navigation } from 'baseui/side-navigation';
import { useLocation, useNavigate } from 'react-router-dom';
import { Icon } from '../../Core/Components/Icon';
import { MiniActionbar } from '../../MiniActionbar/Components/MiniActionbar';
import { miniActionbarActiveItemAtom } from '../../MiniActionbar/Atoms/miniActionbar';
import { graphql, useFragment } from 'react-relay';
import { DefaultLayoutFragment$key } from '../../../__generated__/DefaultLayoutFragment.graphql';

export interface DefaultLayoutProps {
  children: React.ReactNode;
  header?: React.ReactNode;
  $ref: DefaultLayoutFragment$key;
}

export function DefaultLayout({ children, header, $ref }: DefaultLayoutProps) {
  const spaces = useFragment<DefaultLayoutFragment$key>(
    graphql`
      fragment DefaultLayoutFragment on Project {
        spaces {
          edges {
            node {
              id
              name
            }
          }
        }
      }
    `,
    $ref
  );

  const [css, $theme] = useStyletron();

  const headerOpen = useRecoilValue(headerOpenAtom);
  const isActionSidebarMenu = useRecoilValue(miniActionbarActiveItemAtom);

  const { pathname } = useLocation();

  const navigate = useNavigate();

  return (
    <div
      className={css({
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      })}
    >
      {header}

      <Sidebar
        $style={{
          transform: headerOpen ? 'translateX(0)' : 'translateX(-100%)',
        }}
      >
        <Navigation
          items={[
            {
              title: <SidebarItem icon="dashboard" title="Dashboard" />,
              itemId: '/',
            },
            {
              title: (
                <SidebarItem icon="layout-header-sidebar-left" title="Spaces" />
              ),
              itemId: '/spaces',
              subNav: spaces.spaces?.edges
                ?.filter((res) => res?.node)
                .map((res) => ({
                  itemId: `/spaces/${res?.node?.id}`,
                  title: <SidebarItem title={res?.node?.name || ''} />,
                })),
            },
            {
              title: <SidebarItem icon="users" title="Customers" />,
              itemId: '/customer',
            },
            {
              title: <SidebarItem icon="check-circle-o" title="Todos" />,
              itemId: '/todos',
            },
            {
              title: <SidebarItem icon="calendar" title="Calendar" />,
              itemId: '/calendar',
            },
            {
              title: <SidebarItem icon="bell-o" title="Notifications" />,
              itemId: '/notification',
            },
          ]}
          activeItemId={pathname}
          onChange={({ event, item }) => {
            // prevent page reload
            event.preventDefault();
            navigate(item.itemId as never);
          }}
          overrides={{
            NavItem: {
              style: ({ $active }) => {
                if (!$active) {
                  return {
                    paddingLeft: $theme.sizing.scale600,
                    color: $theme.colors.primarySideBarA,
                  };
                }

                return {
                  paddingLeft: $theme.sizing.scale600,
                  backgroundImage: $theme.colors.primarySideBarA,
                  borderLeftColor: $theme.colors.primaryHeaderA,
                };
              },
            },
          }}
        />
      </Sidebar>

      <main
        id="main-scroll"
        className={css({
          flexGrow: 1,
          backgroundColor: $theme.colors.primaryB,
          marginTop: '48px',
          marginLeft: headerOpen ? '280px' : 0,
          marginRight: isActionSidebarMenu ? '320px' : 0,
          transitionProperty: 'margin,width',
          transitionDuration: '100ms',
          transitionTimingFunction: 'ease',
          width: `calc(100% ${headerOpen ? '- 280px' : ''} ${
            isActionSidebarMenu ? '- 320px' : ''
          })`,
          height: '100%',
        })}
      >
        {children}
        <MiniActionbar />
      </main>

      <Footer />
    </div>
  );
}

export function SidebarItem({ icon, title }: { icon?: string; title: string }) {
  const [css, $theme] = useStyletron();

  return (
    <div
      className={css({
        display: 'flex',
        alignItems: 'center',
        ...$theme.typography.LabelSmall,
        color: '#fff',
      })}
    >
      {icon && (
        <>
          <Icon icon={icon} />
          <span className={css({ width: '10px' })} />
        </>
      )}
      {title}
    </div>
  );
}
