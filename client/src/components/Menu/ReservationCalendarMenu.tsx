import * as React from "react";
import * as PropTypes from "prop-types";
import ReactUWP from 'react-uwp'
import TreeView, { TreeItem } from "react-uwp/TreeView";
import Icon from "react-uwp/Icon";
import { connect } from 'dva'


const baseStyle: React.CSSProperties = {
    margin: "10px 10px 10px 0"
};

export interface IReservationMenuProps {
    dispatch: any
    learnerProfile: any
};

/**
 * 主页菜单
 *
 * @class ReservationMenu
 * @extends {React.Component<ReservationMenu>}
 */
class ReservationCalendarMenu extends React.Component<IReservationMenuProps> {
    public static contextTypes = { theme: PropTypes.object };
    public context: { theme: ReactUWP.ThemeType };

    public listSource: TreeItem[] = [{
        title: "NEO 16楼学习中心",
        children: [{
            title: "大厅",
            onClick: () => this.props.dispatch(
                { type: "main/setField", name: "calendarDisplayed", value: "16f_lobby" }
            )
        }, {
            title: "大教室（豆袋区）",
            onClick: () => this.props.dispatch(
                { type: "main/setField", name: "calendarDisplayed", value: "16f_large" }
            )
        }, {
            title: "小教室",
            onClick: () => this.props.dispatch(
                { type: "main/setField", name: "calendarDisplayed", value: "16f_small" }
            )
        }, {
            title: "操作台",
            onClick: () => this.props.dispatch(
                { type: "main/setField", name: "calendarDisplayed", value: "16f_operation_desk" }
            )
        }, {
            title: "图书馆",
            onClick: () => this.props.dispatch(
                { type: "main/setField", name: "calendarDisplayed", value: "library" }
            )
        }
        ]
    }]
    public render(): JSX.Element {
        const { theme } = this.context;
        return (
            <div>
                <TreeView
                    style={{ height: 640, width: "100%" }}
                    iconDirection="left"
                    itemHeight={36}
                    headerIcon={false && <Icon style={{ fontSize: 36 / 3 }}>FolderLegacy</Icon>}
                    itemIcon={false && <Icon style={{ fontSize: 36 / 3 }}>OpenFileLegacy</Icon>}
                    listSource={this.listSource}
                    showFocus
                    background={theme.useFluentDesign ? (
                        theme.acrylicTexture40.background
                    ) : theme.chromeLow}
                />
            </div>
        );
    }
}

function mapStateToProps({main, learnerProfile}) {
    return { main, learnerProfile }
}

export default connect(mapStateToProps)(ReservationCalendarMenu)