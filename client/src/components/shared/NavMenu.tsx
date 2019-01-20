import * as React from "react";
import * as PropTypes from "prop-types";
import NavigationView from "react-uwp/NavigationView";
import SplitViewCommand from "react-uwp/SplitViewCommand";
import { connect } from 'dva'
import './NavMenu.less'

export interface INavMenuProps {
    dispatch: any
};

class NavMenu extends React.Component<INavMenuProps> {
    public static contextTypes = { theme: PropTypes.object };
    public paneStyle = {
        backgroundColor: 'black',
        paddingRight: 10,
    }

    public render() {
        const { theme } = this.context;
        const { dispatch } = this.props        
        const baseStyle = {
            margin: 0,
            padding: 0,
        };
        const navigationTopNodes = [
            <SplitViewCommand label="行政日历" key={Math.random()} icon="Calendar" onClick={() => dispatch({type:"main/setField", name:"calendarDisplayed", value:"admin"})}/>,
            <SplitViewCommand label="预约日历" icon="Home" key={Math.random()} onClick={() => dispatch({type:"main/setField", name:"calendarDisplayed", value:"16f_lobby"})}/>,
        ];

        const navigationBottomNode = [
            // (
            //     <SplitViewCommand 
            //         label="管理员入口" 
            //         icon="Admin" 
            //         key={Math.random()} 
            //         onClick={()=> {this.props.dispatch({type:'main/redirect', path:'/admin'})}}
            //     />
            // ),
            // <SplitViewCommand label="用户中心" icon="Contact" key={Math.random()}/>,
            // <SplitViewCommand label="设置" icon="Settings" key={Math.random()}/>
        ];

        return (
            <div 
                style={{height: '100vh'}}
            >
                <NavigationView
                    className="NavMenu"
                    style={{ ...baseStyle}}
                    pageTitle="安格学院"
                    displayMode="compact"
                    autoResize={false}
                    initWidth={48}
                    expandedWidth={300}
                    defaultExpanded={true}
                    paneStyle={this.paneStyle}
                    navigationTopNodes={navigationTopNodes}
                    navigationBottomNodes={navigationBottomNode}
                    focusNavigationNodeIndex={0}
                />
            </div>
        );
    }
}

function mapStateToProps({main}) {
    return { main }
}

export default connect(mapStateToProps)(NavMenu)