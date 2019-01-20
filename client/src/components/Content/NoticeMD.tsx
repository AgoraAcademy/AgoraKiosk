import * as React from "react";
import * as PropTypes from "prop-types";
import MarkdownRender from "react-uwp/MarkdownRender";
import { connect } from "dva";


/**
 * 
 * 获取Markdown字符串并渲染
 * @class NoticeMD
 * @extends {React.Component}
 */
class NoticeMD extends React.Component {
    static contextTypes = { theme: PropTypes.object };
    context: { theme: ReactUWP.ThemeType };

    render() {
        return (
            <div style={{ padding: 20 }}>
                <MarkdownRender text={"testaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa" as any} />
            </div>
        );
    }
}


function mapStateToProps({main}) {
    return { main }
}

export default connect(mapStateToProps)(NoticeMD)

