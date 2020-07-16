import React, { useContext } from 'react';
import { Context } from './Wrapper';

/* import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select'; */

import { FormattedMessage } from 'react-intl';

const LanguageSelect = () => {
	const context = useContext(Context);

	return (
		<div className="language">
			{/* <FormControl
				variant="filled"
				className={classes.formControl}
				size="small"
			>
				<InputLabel id="language-select-filled-label">
					<FormattedMessage id="language.title" defaultMessage="Language" />
				</InputLabel>
				<Select
					labelId="demo-simple-select-filled-label"
					id="demo-simple-select-filled"
					value={context.locale}
					onChange={context.selectLang}
				>
					<MenuItem value={'de'}>
						<FormattedMessage
							id="language.language_de"
							defaultMessage="German"
						/>
					</MenuItem>
					<MenuItem value={'en'}>
						<FormattedMessage
							id="language.language_en"
							defaultMessage="English"
						/>
					</MenuItem>
				</Select>
			</FormControl> */}
			<h6 className="language-title">
				<FormattedMessage id="language.title" defaultMessage="Language" />
			</h6>
			<div className="language-buttons" value={context.locale}>
				<button
					className="language-button"
					value={'de'}
					onClick={context.selectLang}
				>
					DE
				</button>
				{/* <div class="language-button-or">or</div> */}
				<button
					className="language-button"
					value={'en'}
					onClick={context.selectLang}
				>
					EN
				</button>
			</div>
		</div>
	);
};

export default LanguageSelect;
