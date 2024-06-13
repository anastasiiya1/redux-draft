import { useDispatch, useSelector } from 'react-redux';
import styles from './LangSwitcher.module.css';
import { changeLang } from '../../redux/localeSlice';

function LangSwitcher() {
  const lang = useSelector(state => state.locale.lang);
  const dispatch = useDispatch();

  return (
    <div className={styles.langSwitcher}>
      <label className={styles.label}>Select language:</label>
      <select
        value={lang}
        onChange={e => dispatch(changeLang(e.target.value))}
        className={styles.select}
      >
        <option value="en">English</option>
        <option value="uk">Українська</option>
        <option value="pl">Polski</option>
      </select>
      <p>Selected lang: {lang}</p>
    </div>
  );
}

export default LangSwitcher;
