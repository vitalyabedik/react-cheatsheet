import { Link } from 'react-router-dom';

import {
    ASYNC__REQUEST,
    COMPONENT_CLASS,
    COMPONENT_FUNCTION,
    EVENTS,
    FORM,
    FRAGMENT,
    KEY,
    LIFECYCLE,
    PROPS_CLASS,
    PROPS_FUNCTION,
    REACT__MEMO,
    REFS,
    ROUTING,
    STATE_CLASS,
    STATE_FUNCTION,
    USE__CONTEXT,
    USE__EFFECT,
    USE__MEMO,
    VIRTUAL__DOM,
} from '../../../utils/constants/path.constants';

export const menuItems = [
    { label: <Link to='/'>Home</Link>, key: 'Home' },
    {
        label: <Link to={VIRTUAL__DOM}>{VIRTUAL__DOM}</Link>,
        key: { VIRTUAL__DOM },
    },
    {
        label: 'Component',
        children: [
            {
                label: <Link to={COMPONENT_CLASS}>Class</Link>,
                key: { COMPONENT_CLASS },
            },
            {
                label: <Link to={COMPONENT_FUNCTION}>Functional</Link>,
                key: { COMPONENT_FUNCTION },
            },
        ],
    },
    {
        label: 'Props',
        children: [
            {
                label: <Link to={PROPS_CLASS}>Class</Link>,
                key: { PROPS_CLASS },
            },
            {
                label: <Link to={PROPS_FUNCTION}>Functional</Link>,
                key: { PROPS_FUNCTION },
            },
        ],
    },
    {
        label: 'State',
        children: [
            {
                label: <Link to={STATE_CLASS}>Class</Link>,
                key: { STATE_CLASS },
            },
            {
                label: <Link to={STATE_FUNCTION}>Functional</Link>,
                key: { STATE_FUNCTION },
            },
        ],
    },
    { label: <Link to={LIFECYCLE}>{LIFECYCLE}</Link>, key: { LIFECYCLE } },
    { label: <Link to={EVENTS}>{EVENTS}</Link>, key: { EVENTS } },
    { label: <Link to={KEY}>{KEY}</Link>, key: { KEY } },
    { label: <Link to={REFS}>{REFS}</Link>, key: { REFS } },
    { label: <Link to={FRAGMENT}>{FRAGMENT}</Link>, key: { FRAGMENT } },
    {
        label: 'Memo',
        children: [
            {
                label: <Link to={REACT__MEMO}>{REACT__MEMO}</Link>,
                key: { REACT__MEMO },
            },
            {
                label: <Link to={USE__MEMO}>{USE__MEMO}</Link>,
                key: { USE__MEMO },
            },
        ],
    },
    {
        label: <Link to={USE__EFFECT}>{USE__EFFECT}</Link>,
        key: { USE__EFFECT },
    },
    {
        label: <Link to={USE__CONTEXT}>{USE__CONTEXT}</Link>,
        key: { USE__CONTEXT },
    },
    { label: <Link to={FORM}>{FORM}</Link>, key: { FORM } },
    { label: <Link to={ROUTING}>{ROUTING}</Link>, key: { ROUTING } },
    {
        label: <Link to={ASYNC__REQUEST}>{ASYNC__REQUEST}</Link>,
        key: { ASYNC__REQUEST },
    },
];
