import { useStyletron } from 'baseui';
import { Block } from 'baseui/block';
import { HeadingSmall } from 'baseui/typography';
import React, { forwardRef, useEffect, useRef, useState } from 'react';
import { Tab, Tabs } from 'baseui/tabs-motion';
import { Icon } from '../Icon';

export interface PageHeaderProps {
  title: React.ReactNode;
  icon: string;
  endContent?: React.ReactNode;
  tabs?: { title: React.ReactNode; key: number | string }[];
  activeTab?: string | number;
  // eslint-disable-next-line
  onChangeTab?: (key: string | number) => void;
  scrollBody?: React.RefObject<HTMLDivElement>;
}

const PageHeader = forwardRef<HTMLDivElement, PageHeaderProps>(
  (
    {
      title,
      icon,
      endContent,
      tabs,
      onChangeTab,
      activeTab,
      scrollBody = { current: document.getElementById('main-scroll') },
    },
    ref
  ) => {
    const [css, $theme] = useStyletron();

    const [expanded, setExpanded] = useState(true);

    const timeout = useRef<number | null>(null);

    useEffect(() => {
      const ele = scrollBody?.current;

      if (!ele) {
        setExpanded(true);
        return;
      }

      function onScroll() {
        if (timeout.current) {
          clearTimeout(timeout.current as number);
        }

        const shouldExpand = (ele?.scrollTop || 0) < 10;
        timeout.current = setTimeout(() => {
          setExpanded(shouldExpand);
        }, 0) as never as number;
      }

      ele.addEventListener('scroll', onScroll);

      return () => {
        ele.removeEventListener('scroll', onScroll);
      };
    }, [scrollBody?.current]);

    return (
      <div
        ref={ref}
        className={css({
          position: 'sticky',
          top: '48px',
          backgroundColor: $theme.colors.backgroundPrimary,
          zIndex: 100,
          borderBottomColor: $theme.colors.borderTransparent,
          borderBottomStyle: 'solid',
          borderBottomWidth: tabs ? 0 : '1px',
          boxShadow: expanded ? 'none' : $theme.lighting.shadow400,
        })}
      >
        <Block
          display="flex"
          alignItems="center"
          paddingTop={expanded ? 'scale500' : '0'}
          paddingLeft="scale500"
          paddingBottom={expanded ? 'scale500' : '0'}
          paddingRight="48px"
          $style={{
            transitionProperty: 'all',
            transitionDuration: '300ms',
            maxHeight: expanded ? '120px' : 0,
            overflow: 'hidden',
            opacity: expanded ? 1 : 0,
          }}
        >
          <div
            className={css({
              width: expanded ? '32px' : 0,
              height: expanded ? '32px' : 0,
              padding: expanded ? '12px' : 0,
              overflow: 'hidden',
              transitionProperty: 'all',
              transitionDuration: '300ms',
              display: 'flex',
              alignContent: 'center',
              placeContent: 'center',
              placeItems: 'center',
              borderRadius: '12px',
              backgroundColor: $theme.colors.backgroundLightAccent,
            })}
          >
            <Icon
              icon={icon}
              className={css({
                fontSize: expanded ? '24px' : 0,
                transitionProperty: 'all',
                transitionDuration: '300ms',
              })}
            />
          </div>
          <HeadingSmall
            $style={{
              fontFamily: $theme.typography.headingFontFamily,
              paddingLeft: expanded ? '12px' : 0,
              color: '#242424',
              marginBottom: '0px',
              marginTop: '0px',
              transitionProperty: 'all',
              transitionDuration: '100ms',
              fontSize: expanded ? '24px' : '10px',
            }}
          >
            {title}
          </HeadingSmall>

          <span className={css({ flexGrow: 1 })} />
          <div
            className={css({
              position: 'absolute',
              right: '48px',
              top: '6px',
            })}
          >
            {endContent}
          </div>
        </Block>

        {tabs && (
          <div
            className={css({
              display: 'flex',
              position: 'relative',
              borderBottomStyle: $theme.borders.border200.borderStyle as never,
              borderBottomWidth: $theme.borders.border200.borderWidth as never,
              borderBottomColor: expanded
                ? ($theme.borders.border200.borderColor as never)
                : 'transparent',
              alignItems: 'center',
              paddingLeft: $theme.sizing.scale500,
            })}
          >
            <div
              className={css({
                width: expanded ? 0 : '12px',
                height: expanded ? 0 : '12px',
                padding: expanded ? 0 : '12px',
                overflow: 'hidden',
                transitionProperty: 'all',
                transitionDuration: '100ms',
                display: 'flex',
                alignContent: 'center',
                placeContent: 'center',
                placeItems: 'center',
                borderRadius: '12px',
                backgroundColor: $theme.colors.backgroundLightAccent,
                marginRight: expanded ? 0 : '6px',
              })}
            >
              <Icon
                icon={icon}
                className={css({
                  fontSize: expanded ? 0 : '18px',
                  transitionProperty: 'all',
                  transitionDuration: '100ms',
                })}
              />
            </div>

            <Tabs
              activeKey={activeTab}
              overrides={{
                TabBorder: { style: { height: '0' } },
                TabHighlight: { style: { height: '2px' } },
                TabList: {
                  style: { paddingBottom: '2px', marginBottom: '-2px' },
                },
              }}
              onChange={({ activeKey }) => {
                onChangeTab?.(activeKey);
              }}
            >
              {tabs.map((tab) => {
                return (
                  <Tab
                    title={tab.title}
                    key={tab.key}
                    overrides={{
                      TabPanel: { style: { paddingBottom: 0, paddingTop: 0 } },
                      Tab: {
                        style: {
                          paddingTop: expanded ? '10px' : '18px',
                          paddingBottom: expanded ? '10px' : '14px',
                          borderTopLeftRadius: '4px',
                          borderTopRightRadius: '4px',
                          transitionProperty: 'all',
                          transitionDuration: '100ms',
                          fontWeight: 700,
                        },
                      },
                    }}
                  />
                );
              })}
            </Tabs>
          </div>
        )}
      </div>
    );
  }
);

PageHeader.displayName = 'PageHeader';

export default PageHeader;
